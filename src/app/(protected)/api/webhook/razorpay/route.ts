import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import { updateSubscriptionQuerie } from "@/actions/user/queries";
import nodemailer from 'nodemailer';


export async function POST(req: NextRequest) {
  // Get the raw body as a string
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature");

  // Validate input
  if (!signature || !rawBody) {
    console.error("Invalid input format", { signature, rawBody });
    return NextResponse.json(
      { message: "Invalid input format", success: false },
      { status: 400 }
    );
  }

  // Verify webhook signature with RAW BODY
  const isValid = Razorpay.validateWebhookSignature(
    rawBody, // Use raw body, not JSON.stringify()
    signature,
    process.env.RAZORPAY_WEBHOOK_SECRET!
  );

  if (!isValid) {
    console.error("Invalid signature");
    return NextResponse.json(
      { message: "Invalid signature", success: false },
      { status: 401 }
    );
  }

  // Parse the body only AFTER validation
  const body = JSON.parse(rawBody);
  const eventType = body.event;


  const mailUser = async (email:string,type:'Activate'|'Cancelled') => {
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USERNAME!,
          pass: process.env.MAILTRAP_PASSWORD!
        }
      });
      //-UI update
      const info = await transporter.sendMail({
        from: 'noreply@link.ai', 
        to: email, // list of receivers
        subject: `Your Link ? Pro is ${type}`, // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
  }

  try {
    // Handle subscription events
    switch (eventType) {
      case "subscription.charged":
        const paymentEntity = body.payload?.payment?.entity;
        // console.log("subscription.charged",paymentEntity);
        
        if (!paymentEntity?.notes?.clerkId) {
          console.error("Invalid payload for subscription.charged");
          return NextResponse.json(
            { message: "Invalid payload", success: false },
            { status: 400 }
          );
        }
        const user = await updateSubscriptionQuerie(paymentEntity.notes.clerkId, "PRO",paymentEntity.id);
        mailUser(user.email!,'Activate');
        // console.log("Subscription charged:", paymentEntity.id);
        break;

      case "subscription.cancelled":
        const subscription = body.payload?.subscription?.entity;
        // console.log("subscription.cancelled",subscription);
        if (!subscription?.notes?.clerkId) {
          console.error("Invalid payload for subscription.cancelled");
          return NextResponse.json(
            { message: "Invalid payload", success: false },
            { status: 400 }
          );
        }
        const users = await updateSubscriptionQuerie(subscription.notes.clerkId, "FREE",paymentEntity.id);
        mailUser(users.email!,'Cancelled');
        // console.log("Subscription cancelled:", subscription.id);
        break;

      default:
        console.warn("Unhandled event type:", eventType);
    }

    return NextResponse.json(
      { message: "Success", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Webhook processing failed:", error);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}


export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: 200,
    message: "Razorpay Server Down",
    success: false,
  });
}



/*

Payment captured: {
  id: 'pay_PoyXd2DZXhmi0P',
  entity: 'payment',
  amount: 900,
  currency: 'INR',
  status: 'captured',
  order_id: 'order_PoyWi8aS4YwPfp',
  invoice_id: 'inv_PoyWhTcZOutVzV',
  international: false,
  method: 'card',
  amount_refunded: 0,
  amount_transferred: 0,
  refund_status: null,
  captured: '1',
  description: 'Monthly Subscription',
  card_id: 'card_PoyXdKv7I3IziV',
  card: {
    id: 'card_PoyXdKv7I3IziV',
    entity: 'card',
    name: '',
    last4: '4366',
    network: 'VISA',
    type: 'credit',
    issuer: 'UTIB',
    international: false,
    emi: true,
    expiry_month: '01',
    expiry_year: '2099',
    sub_type: 'consumer',
    token_iin: null,
    number: '**** **** **** 4366',
    color: '#C15482'
  },
  bank: null,
  wallet: null,
  vpa: null,
  email: 'singhpranjal764@gmail.com',
  contact: '+918709509719',
  customer_id: null,
  token_id: 'token_PoyXdU2vthR8B1',
  notes: { clerkId: 'user_2sGkJzFREIvznStUQh94iMYN2Qi' },
  fee: 27,
  tax: 0,
  error_code: null,
  error_description: null,
  acquirer_data: { auth_code: '497092' },
  created_at: 1738091776
}
*/
