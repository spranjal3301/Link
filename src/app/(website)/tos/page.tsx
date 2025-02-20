import { Cookie, LinkIcon, Scroll, Shield } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-50 to-black-100">
      {/* Header */}
      <header className="bg-black border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Scroll className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-white ">
              Terms and Conditions
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-black rounded-xl shadow-md overflow-hidden border">
          {/* Welcome Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-white mb-4">
              Welcome to Link!
            </h2>
            <p className="text-neutral-500">
              These terms and conditions outline the rules and regulations for
              the use of Link's Website, located at
              https://one-linkx.vercel.app/.
            </p>
          </div>

          {/* Key Sections */}
          <div className="grid md:grid-cols-3 gap-6 p-6 border-b border-gray-200">
            <div className="flex flex-col items-center p-4 bg-[#18181b] rounded-lg">
              <Shield className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-white mb-2">Security First</h3>
              <p className="text-sm text-neutral-500 text-center">
                We prioritize the protection of your data and privacy
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#18181b] rounded-lg">
              <Cookie className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-white mb-2">Cookie Policy</h3>
              <p className="text-sm text-neutral-500 text-center">
                Transparent use of cookies to enhance your experience
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#18181b] rounded-lg">
              <LinkIcon className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-white mb-2">Fair Use</h3>
              <p className="text-sm text-neutral-500 text-center">
                Clear guidelines for linking and content usage
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="p-6 space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                Terms of Use
              </h3>
              <p className="text-neutral-500 mb-4">
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use Link if you do not agree to
                take all of the terms and conditions stated on this page.
              </p>
              <p className="text-neutral-500">
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                "Client", "You" and "Your" refers to you, the person log on this
                website and compliant to the Company's terms and conditions.
              </p>
            </section>

            <TosSection
              title={"1. Our Services"}
              dec1={
                "We provide a platform that enables businesses and individuals to create automated chat flows that they can deploy across a wide range of messaging services, social media and other third-party platforms."
              }
              dec2={
                "If you purchase or use our Services, you’re doing so through Link, and such purchase and use is subject to this Agreement; provided, that if you’ve entered into a separate agreement or order form with us governing the purchase or use of our Services, such separate agreement or order form will govern in the event of a conflict with this Agreement."
              }
            />

            <TosSection
              title={"2. Account, Password, Security, and Phone Use"}
              dec1={
                "You must register with Link and create an account to use the Services (an “Account”) and as part of that process you will be requested to provide certain information, including without limitation your name, phone number and email address, which may be provided by linking certain services, including without limitation Instagram, Facebook, WhatsApp or Telegram, to your Account.  By using the Services, you agree to provide true, accurate, current and complete information as prompted by the registration process and to maintain and promptly update the Account information to keep it accurate, current and complete. You are the sole authorized user of your Account. You are responsible for maintaining the confidentiality of any login and password provided by you or given to you by Link for accessing the Services. You are solely and fully responsible for all activities that occur under your password or Account, even if not authorized by you.  Users are responsible for the content users upload to their Account and use of any user’s Account, and Link expressly disclaims any liability derived therefrom. Should you suspect that any unauthorized party may be using your password or Account or you suspect any other breach of security, you agree to contact Link immediately."
              }
              dec2={
                "The person signing up for the Services will be the contracting party (“Account Representative”) for the purposes of these Terms of Service and will be the person who is authorized to use any corresponding Account we provide to the Account Representative in connection with the Services; provided, however, that if you are signing up for the Services on behalf of your employer, your employer shall be the Account Representative. As the Account Representative, you are solely responsible for complying with these Terms of Service and only you are entitled to all benefits accruing thereto. Your Account is not transferable to any other person or account. "
              }
              dec3={
                "By providing your phone number and email address and by using the Services, you hereby affirmatively consent to Link use of your phone number for calls and recurring texts (including with an autodialer and/or prerecorded voice) and your email address in order to (i) perform and improve upon the Services, (ii) facilitate the carrying out of our Services, and (iii) provide you with information and reminders regarding your registration, changes and updates, service outages, or alterations. These calls and messages may include, among other things, push notifications and other reminders delivered through our App.  Link will not assess any charges for calls or texts, but standard message, data or other charges from your wireless carrier may apply. You may opt-out of receiving calls or messages from us by modifying your Account settings on the Site or the App, by stating that you no longer wish to receive calls or messages from us during any call with us, or by visiting https://pranjalonline.vercel.app/ and specifying you want to opt-out of calls or messages. You understand that we may send you a message confirming any opt-out by you."
              }
            />

            <TosSection
              title={"3. Agencies and Business Owners"}
              dec1={
                "A “Business Owner” is any individual or entity that uses Link Services to market, support, develop, or otherwise commercialize their business, services, or products.  An “Agency” is any service provider retained or hired by a Business Owner to create and/or manage a Link account and use the Services on the Business Owner’s behalf.  An Agency is not required for a Business Owner to use the Services.Notwithstanding the foregoing in Section 2, if you are an Agency using our Services to provide services to a Business Owner, you (i) agree to correctly identify such Business Owner as an administrator on the Account and, if applicable, on the applicable Facebook page, Instagram page, WhatsApp page, Telegram page and on any other applicable page on any other applicable platform, and (ii) confirm you are authorized to use the Services and the Account on behalf of the Business Owner."
              }
              dec2={
                "The Business Owner shall be the sole and exclusive account representative of any Account created on its behalf by an Agency; provided that the Agency shall maintain its rights and interests in and to all designs, templates, flows, sequences, or other intellectual property associated with the chatbot automation work product created by such Agency for the Business Owner (such work product, the “Agency Content”).In the event of a termination of the relationship between a Business Owner and its Agency, the Business Owner will promptly notify Link of such termination."
              }
              dec3={
                "Following the transfer of an Account from an Agency to the Business Owner, the Business Owner shall be solely responsible for the payment of any subscription plans and/or fees due with respect to the Account."
              }
            />

            <TosSection
              title={"4. User Generated Content"}
              dec1={
                "“User Generated Content” is defined as any content, information, and materials that may be textual, audio, or visual that you or any Conversation Participant provide, submit, upload, publish, or make otherwise available to the Services and our users. You are solely responsible for your and your Conversation Participants’ User Generated Content, and we act merely as a passive conduit for your online distribution and publication of User Generated Content. You acknowledge and agree that Link:"
              }
              dec2={
                "Is not involved in the creation or development of User Generated Content.Disclaims any responsibility for User Generated Content.Cannot be liable for claims arising out of or relating to User Generated Content.Is not obligated to monitor, review, or remove User Generated Content, but reserves the right to limit or remove User Generated Content on the Services at its sole discretion."
              }
              dec3={
                "You hereby represent and warrant to Link that your User Generated Content (i) will not be false, inaccurate, incomplete or misleading; (ii) will not infringe on any third party’s copyright, patent, trademark, trade secret or other proprietary right or rights of publicity, personality or privacy; (iii) will not violate any law, statute, ordinance, or regulation (including without limitation those governing export control, consumer protection, unfair competition, anti-discrimination, false advertising, anti-spam or privacy); (iv) will not be defamatory, libelous, unlawfully threatening, or unlawfully harassing; (v) will not be obscene or contain pornography (including but not limited to child pornography) or be harmful to minors; (vi) will not contain any viruses, Trojan Horses, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information; (vii) will not represent you being employed or directly engaged by or affiliated with Link or purport that you are authorized to act as a representative or agent of Link; and (viii) will not create liability for Link or cause Link to lose (in whole or in part) the services of its ISPs or other suppliers."
              }
            />

            <TosSection
              title={"5 .Communication by Text Message or Email"}
              dec1={
                "If you would like to communicate with your users via text message or email, you hereby agree to the following Compliance and Indemnity Terms (“CIT”). You are required to use the Services in full compliance with all applicable laws and regulations, including without limitation, all state, provincial and federal laws specifically including but not limited to the Telephone Consumer Protection Act of the United States, as amended (“TCPA”); the Personal Information Protection and Electronic Documents Act of Canada (“PIPEDA”), and any substantially similar provincial privacy laws; and Canada’s Anti-Spam Law, (“CASL”), all as may be amended (the TCPA, PIPEDA and CASL are collectively referred to as the “Electronic Messaging Laws”). By making any use of the Services, you expressly warrant that you are and shall continue to act in full compliance with the law."
              }
              dec2={
                "You agree that you have read and understand the Electronic Messaging Laws and any similar state or provincial/territorial laws, and all other applicable laws and regulations. You understand that in some cases, applicable state and local restrictions are more restrictive than the federal rules. You should review these rules with your own legal counsel to ensure that you understand and comply. Link will not assume responsibility for ensuring that your activities meet applicable legal requirements. Link will not assume any liability if you are ever held guilty or found liable for any violation of law, rule or regulation. Notwithstanding the foregoing, you acknowledge that Link has and is taking active steps to help support the compliance of its customers, including by having you agree to these Terms of Service.You understand and acknowledge that it is generally a violation of federal law, including the TCPA, to contact a consumer by phone, text or email without prior express written consent. Link is not responsible for ensuring that you do not transmit messages to consumers, including by telephone or email in violation of the consent rules."
              }
              dec3={
                "You understand and acknowledge that it is generally a violation of the federal law of Canada, including CASL, to contact a consumer by text message, phone, electronic messaging, or email without prior express written consent. You will not contact any individual through the Services or about the Services unless you have established consent to do so in accordance with the applicable law. You will provide proof of such consents or opt-ins, the messages you have sent, and your implementation of unsubscribe requests to us upon our request. You will include all content required under the applicable laws in your messages, including your name, mailing address, email, telephone or web address, and the ability to unsubscribe. You will not send any messages to any individual using the Services if the individual has opted out or withdrawn their consent, including if they have replied “STOP”, or similar, to one of your previous messages. You, not Link, are solely responsible for the content of your messages, and its compliance with all applicable law. You acknowledge and agree that Link acts solely as a service provider to allow the sending of your messages, but that you exercise control over the message content and destination and must ensure your messages comply with all applicable laws.Link is not responsible for ensuring that you do not transmit messages to consumers, including by text message, telephone or email in violation of the consent rules."
              }
            />

            <TosSection
              title={"6. Representations and Warranties; Compliance with Laws"}
              dec1={
                "You represent and warrant that: (i) you are 18 years of age or older or are at least of the legally required age in the jurisdiction in which you reside, and are otherwise capable of entering into binding contracts, and (ii) you have the right, authority and capacity to enter into this Agreement and to abide by the terms and conditions of this Agreement, and that you will so abide. Where you enter into this Agreement on behalf of a company or other organization, you represent and warrant that you have authority to act on behalf of that entity and to bind that entity to this Agreement.You further represent and warrant that (i) you have read, understand, and agree to be bound by these Terms of Service and the Privacy Policy in order to access and use the Services, (ii) you will act professionally and responsibly in your interactions with other users, and (iii) when using or accessing the Services, you will act in accordance with any applicable local, state, or federal law or custom and in good faith."
              }
              dec2={
                "You are responsible for determining whether the Services are suitable for you to use in light of any applicable regulations such as EU Data Privacy Laws or other laws. If you are subject to regulations (such as HIPAA) and you use the Services, then we will not be liable if our Services do not meet those requirements. You may not use the Services for any unlawful or discriminatory activities, including acts prohibited by the Federal Trade Commission Act, Fair Credit Reporting Act, Equal Credit Opportunity Act, or other laws that apply to commerce. You are also responsible for notifying the end-user of data collection in connection with the Services, as required by applicable law.You represent and warrant that you shall be solely responsible for obtaining end user consent for text messaging in full compliance with all applicable laws, rules, and regulations, including, without limitation, the Telephone Consumer Protection Act, 47 U.S.C. 227 and its implementing regulations, 47 C.F.R. 64.1200. You further represent and warrant that you shall not use the service to communicate with consumers who have requested that you cease contacting them."
              }
            />

            <TosSection 
              title={"7. Billing and Payment"} 
              dec1={"Unless we separately agree with you that you will receive an invoice from us for the Services that requires you to pay us directly, payment and any other expenses must be paid through the third party payment processing system (the “PSP”) as indicated on the Services. You may be required to register with the PSP, agree to terms of service of the PSP, provide your payment details to the PSP and go through a vetting process at the request of the PSP to set up an account with the PSP (the “PSP Services Agreement”). By accepting these Terms of Service, you agree that you have downloaded or printed, and reviewed and agreed to, the PSP Services Agreement. Please note that Manychat is not a party to the PSP Services Agreement and that you, the PSP and any other parties listed in the PSP Services Agreement are the parties to the PSP Services Agreement and that Manychat has no obligations, responsibility or liability to any user or any other party under the PSP Services Agreement."} 
              dec2={"Our charges for subscription plans (monthly, annual, or other period, as applicable from time to time) and fees for any additional Services are posted on the Site and may be changed from time to time. If you have signed up for a Manychat subscription plan (each a, “Subscription Plan”) and any part of a month, year, or other period is included in the Term, then payment will be due for the full month, full year, or full other period, as applicable. Payments for monthly Subscription Plans are due for any month on the same or closest date to the day you made your first monthly payment, and Payments for yearly Subscription Plans are due for any year on the same or closest date to the day you made your first yearly payment. Please note that fees for certain Services may vary country by country and certain customers may have access to different billing and payment features, depending on when they created their account with Manychat.If you have signed up for a Subscription Plan or have opted to auto-refill your account with funds to pay for certain Services, you will provide us with valid credit card information and hereby authorize us to deduct the monthly, yearly or other automatic charges against that credit card. You’ll replace the information for any credit card that expires with information for a valid one. Anyone using a credit card represents and warrants that they are authorized to use that credit card, and that any and all charges may be billed to that credit card and won’t be rejected. If we’re unable to process your credit card order, we’ll try to contact you by email and will suspend your account until your payment can be processed."} 
              dec3={"UNLESS YOU CANCEL A TRIAL BEFORE THE END OF THE TRIAL PERIOD, YOU WILL AUTOMATICALLY BECOME A RECURRING SUBSCRIBER TO THE SERVICES YOU CHOSE TO SIGN UP FOR UNDER THE TRIAL AND THE PAYMENT METHOD YOU PROVIDED WILL AUTOMATICALLY BE CHARGED THE THEN-CURRENT APPLICABLE PRICE. IF YOU CANCEL THE TRIAL DURING THE TRIAL PERIOD, YOU WILL LOSE ACCESS TO THE SERVICES. TO CANCEL, YOU MUST LOG INTO YOUR ACCOUNT AND FOLLOW THE PROMPTS ON THE ACCOUNT PAGE."} />

            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                7. License
              </h3>
              <p className="text-neutral-500 mb-4">
                Unless otherwise stated, Link and/or its licensors own the
                intellectual property rights for all material on Link. All
                intellectual property rights are reserved.
              </p>
              <div className="bg-[#18181b] rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">You must not:</h4>
                <ul className="list-disc list-inside text-neutral-500 space-y-2">
                  <li>Republish material from Link</li>
                  <li>Sell, rent or sub-license material from Link</li>
                  <li>Reproduce, duplicate or copy material from Link</li>
                  <li>Redistribute content from Link</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                8. Hyperlinking
              </h3>
              <p className="text-neutral-500 mb-4">
                The following organizations may link to our Website without
                prior written approval:
              </p>
              <ul className="list-disc list-inside text-neutral-500 space-y-2 ml-4">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses
                </li>
                <li>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site
                </li>
              </ul>
              <p className="text-neutral-500 mt-4">
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party’s site.
              </p>

              <h4 className="text-lg font-semibold text-white mt-6 mb-4">
                Additional Link Requests
              </h4>
              <p className="text-neutral-500 mb-4">
                We may consider and approve other link requests from the
                following types of organizations:
              </p>
              <ul className="list-disc list-inside text-neutral-500 space-y-2 ml-4">
                <li>
                  commonly-known consumer and/or business information sources
                </li>
                <li>dot.com community sites</li>
                <li>associations or other groups representing charities</li>
                <li>online directory distributors</li>
                <li>internet portals</li>
                <li>accounting, law and consulting firms</li>
                <li>educational institutions and trade associations</li>
              </ul>
              <p className="text-neutral-500 mt-4">
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of Link; and (d) the link is in the context of general resource
                information.
              </p>
              <p className="text-neutral-500 mt-4">
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party’s site.
              </p>
              <p className="text-neutral-500 mt-4">
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to Link. Please include your name, your
                organization name, contact information as well as the URL of
                your site, a list of any URLs from which you intend to link to
                our Website, and a list of the URLs on our site to which you
                would like to link. Wait 2-3 weeks for a response.
              </p>

              <h4 className="text-lg font-semibold text-white mt-6 mb-4">
                Approved Hyperlinking
              </h4>
              <p className="text-neutral-500 mb-4">
                Approved organizations may hyperlink to our Website as follows:
              </p>
              <ul className="list-disc list-inside text-neutral-500 space-y-2 ml-4">
                <li>By use of our corporate name; or</li>
                <li>
                  By use of the uniform resource locator being linked to; or
                </li>
                <li>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party’s site.
                </li>
              </ul>
              <p className="text-neutral-500 mt-4">
                No use of Link's logo or other artwork will be allowed for
                linking absent a trademark license agreement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                9. Content Liability
              </h3>
              <div className="bg-[#18181b] border-l-4 border-indigo-500 p-4 rounded">
                <p className="text-neutral-500">
                  We shall not be hold responsible for any content that appears
                  on your Website. You agree to protect and defend us against
                  all claims that is rising on your Website. No link(s) should
                  appear on any Website that may be interpreted as libelous,
                  obscene or criminal, or which infringes, otherwise violates,
                  or advocates the infringement or other violation of, any third
                  party rights.
                </p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                10. Disclaimer
              </h3>
              <p className="text-neutral-500">
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </p>
              <ul className="list-disc list-inside text-neutral-500 ml-4 mt-2">
                <li>
                  limit or exclude our or your liability for death or personal
                  injury;
                </li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </li>
              </ul>
              <p className="text-neutral-500 mt-4">
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </p>
              <p className="text-neutral-500 mt-4">
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                11. Your Privacy
              </h3>
              <div className="bg-[#18181b] border-l-4 border-indigo-500 p-4 rounded">
                <p className="text-neutral-500">
                  Please read{" "}
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>.
                </p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                12. Removal of links from our website
              </h3>
              <p className="text-neutral-500">
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly. We do not ensure that
                the information on this website is correct, we do not warrant
                its completeness or accuracy; nor do we promise to ensure that
                the website remains available or that the material on the
                website is kept up to date.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-white mb-4">
                13. Reservation of Rights
              </h3>
              <div className="bg-[#18181b] border-l-4 border-indigo-500 p-4 rounded">
                <p className="text-neutral-500">
                  We reserve the right to request that you remove all links or
                  any particular link to our Website. You approve to immediately
                  remove all links to our Website upon request. We also reserve
                  the right to amen these terms and conditions and it’s linking
                  policy at any time. By continuously linking to our Website,
                  you agree to be bound to and follow these linking terms and
                  conditions.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Last updated: February 2025</p>
        </footer>
      </main>
    </div>
  );
};

const TosSection = ({ title, dec1, dec2, dec3 }: any) => (
  <section>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <p className="text-neutral-500 mb-4">{dec1}</p>
    <p className="text-neutral-500 mb-4">{dec2}</p>
    <p className="text-neutral-500">{dec3}</p>
  </section>
);

export default Page;
