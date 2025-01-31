import { razorpay } from "@/lib/payment-provider";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const clerkUser = await currentUser();
  if (!clerkUser) return NextResponse.json({ status: 404 });
  try {
    const body = await req.json();

    if (body.planType != "MONTHLY" && body.planType == "YEARLY") {
      return NextResponse.json({ status: 404, message: "Invaild Input" });
    }

    const getSubscription = async (plan_id: string) =>
      await razorpay.subscriptions.create({
        plan_id,
        customer_notify: 1,
        quantity: 1,
        total_count: 1,
        addons: [],
        notes: {
          clerkId: clerkUser.id,
          email:clerkUser.emailAddresses[0].emailAddress
        },
      });

    const subscription = await getSubscription(
      body.planType == "MONTHLY"
        ? process.env.RAZORPAY_SUBSCRIPTION_ID_MONTHLY!
        : process.env.RAZORPAY_SUBSCRIPTION_ID_YEARLY!
    );

    // console.log(subscription);
    
    if (subscription) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        success: true,
        data:subscription
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Razorpay Server Down",
      success: false,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal sever error",
      success: false,
    });
  }
}

// clientId
// priceId
// success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?session_id={CHECKOUT_SESSION_ID}`,
// cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?cancel=true`,
