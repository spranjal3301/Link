# Link

Link is an innovative application that automates your Instagram interactions using the power of AI. It’s designed to deliver fast, personalized responses to comments, DMs, story replies, and mentions—acting as your personal assistant that sounds exactly like you! Additionally, Link integrates a secure payment gateway for seamless transactions.

![Demo Model](https://github.com/spranjal3301/link/blob/main/preview.png?raw=true)

---

## Features

- **Automated Instagram DMs & Comments:**  
  Automatically respond to Instagram DMs, comments, story replies, and mentions.

- **AI-Powered Personal Assistant:**  
  Uses advanced AI to generate responses that mirror your tone and style.

- **Fast & Efficient Interaction:**  
  Ensures rapid response times, keeping your audience engaged.

- **Payment Gateway Integration:**  
  Integrated payment processing (via Razorpay, Stripe, etc.) for a seamless financial experience.

- **Customizable Automations:**  
  Set up and manage various automation workflows tailored to your needs.

---

## Tech Stack

Link leverages a modern and robust tech stack to deliver a seamless, AI-powered experience. Below is an overview of the key technologies powering the application:

### Frontend
- **Next.js & React:**  
  Provides a powerful framework for building fast, scalable, and server-side rendered web applications.
- **TypeScript:**  
  Ensures code quality and maintainability through static type-checking.
- **Tailwind CSS:**  
  Enables rapid UI development with a utility-first approach to styling.
- **Radix UI & Styled Components:**  
  Supply accessible and customizable UI components for a consistent design experience.

### Backend & API
- **Node.js & Next.js API Routes:**  
  Handle server-side logic and facilitate secure API endpoints.
- **Prisma ORM:**  
  Manages database interactions and migrations with an efficient, type-safe approach.

### Payment Integration
- **Stripe & Razorpay:**  
  Integrated payment gateways offer secure and flexible payment processing capabilities.

### Authentication & State Management
- **Clerk:**  
  Provides robust user authentication and session management.
- **Redux & TanStack Query:**  
  Streamline state management and optimize data fetching across the application.

### AI & Automation
- **OpenAI Generative AI:**  
  Empowers the automation of Instagram interactions by generating personalized, human-like responses.
- **Additional Libraries:**  
  Axios for HTTP requests, nodemailer for email notifications, and date-fns for date operations, further enrich the app’s functionality.

Each component in this tech stack is carefully chosen to ensure high performance, scalability, and a smooth user experience as you automate your Instagram DMs and interactions with AI.

## DataBases Model
![DataBase Model](https://github.com/spranjal3301/link/blob/main/db-model.png?raw=true)

## Directory Structure

```plaintext
spranjal3301-link/
├── README.md
├── components.json
├── lading.excalidraw
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
└── src/
    ├── middleware.ts
    ├── actions/
    │   ├── index.ts
    │   ├── automations/
    │   │   ├── automations.ts
    │   │   └── queries.ts
    │   ├── instagram/
    │   │   ├── index.ts
    │   │   └── queries.ts
    │   ├── integrations/
    │   │   ├── index.ts
    │   │   └── queries.ts
    │   └── user/
    │       ├── queries.ts
    │       └── user.ts
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   ├── (auth)/
    │   │   ├── sign-in/
    │   │   │   └── [[...sign-in]]/
    │   │   │       └── page.tsx
    │   │   └── sign-up/
    │   │       └── [[...sign-up]]/
    │   │           └── page.tsx
    │   ├── (protected)/
    │   │   ├── api/
    │   │   │   ├── payment/
    │   │   │   │   └── route.ts
    │   │   │   └── webhook/
    │   │   │       ├── instagram/
    │   │   │       │   └── route.ts
    │   │   │       └── razorpay/
    │   │   │           └── route.ts
    │   │   ├── callback/
    │   │   │   └── instagram/
    │   │   │       ├── loading.tsx
    │   │   │       └── page.tsx
    │   │   ├── dashboard/
    │   │   │   ├── loading.tsx
    │   │   │   ├── page.tsx
    │   │   │   └── [slug]/
    │   │   │       ├── layout.tsx
    │   │   │       ├── loading.tsx
    │   │   │       ├── page.tsx
    │   │   │       ├── _components/
    │   │   │       │   ├── chart.tsx
    │   │   │       │   ├── double-gradient-card.tsx
    │   │   │       │   └── metrics-card.tsx
    │   │   │       ├── automations/
    │   │   │       │   ├── page.tsx
    │   │   │       │   ├── [id]/
    │   │   │       │   │   └── page.tsx
    │   │   │       │   └── _components/
    │   │   │       │       ├── activate-automation-button.tsx
    │   │   │       │       ├── active-trigger.tsx
    │   │   │       │       ├── automation-bread-crumb.tsx
    │   │   │       │       ├── automation-list.tsx
    │   │   │       │       ├── delete-automation.tsx
    │   │   │       │       ├── keywords.tsx
    │   │   │       │       ├── post-button.tsx
    │   │   │       │       ├── post-node.tsx
    │   │   │       │       ├── then-action.tsx
    │   │   │       │       ├── then-node.tsx
    │   │   │       │       ├── trigger-button.tsx
    │   │   │       │       ├── trigger.tsx
    │   │   │       │       └── when-node.tsx
    │   │   │       ├── integrations/
    │   │   │       │   ├── page.tsx
    │   │   │       │   └── _components/
    │   │   │       │       └── integration-card.tsx
    │   │   │       └── settings/
    │   │   │           └── page.tsx
    │   │   └── payment/
    │   │       ├── loading.tsx
    │   │       └── page.tsx
    │   └── (website)/
    │       ├── page.tsx
    │       ├── privacy-policy/
    │       │   └── page.tsx
    │       └── tos/
    │           └── page.tsx
    ├── components/
    │   ├── global/
    │   │   ├── container.tsx
    │   │   ├── create-automation.tsx
    │   │   ├── gradiant-button.tsx
    │   │   ├── loader.tsx
    │   │   ├── logo.tsx
    │   │   ├── Landing/
    │   │   │   ├── animated-beam-multiple-output-demo.tsx
    │   │   │   ├── animated-list-demo.tsx
    │   │   │   ├── get-started-btn.tsx
    │   │   │   ├── loginBtn.tsx
    │   │   │   └── navbar.tsx
    │   │   ├── dashboard-layout/
    │   │   │   ├── clerk-auth-state.tsx
    │   │   │   ├── desktop-sidebar.tsx
    │   │   │   ├── index.tsx
    │   │   │   ├── main-sidebar.tsx
    │   │   │   ├── mobile-nav.tsx
    │   │   │   ├── sidebar-content.tsx
    │   │   │   ├── sidebar-itmes.tsx
    │   │   │   ├── sidebar-toggle.tsx
    │   │   │   └── subscription.tsx
    │   │   ├── info-bar/
    │   │   │   ├── index.tsx
    │   │   │   ├── notification.tsx
    │   │   │   └── search.tsx
    │   │   └── payments/
    │   │       ├── billing.tsx
    │   │       ├── payment-button.tsx
    │   │       └── payment-card.tsx
    │   ├── providers/
    │   │   ├── providers.tsx
    │   │   ├── query-provider.tsx
    │   │   ├── redux-provider.tsx
    │   │   └── theme-provider.tsx
    │   ├── sections/
    │   │   ├── cta.tsx
    │   │   ├── feature.tsx
    │   │   ├── footer.tsx
    │   │   ├── header.tsx
    │   │   ├── hero-section.tsx
    │   │   ├── prizing.tsx
    │   │   ├── seperator.tsx
    │   │   ├── tech-stack.tsx
    │   │   └── _components/
    │   │       ├── hero-banner.tsx
    │   │       ├── hero-button.tsx
    │   │       ├── hero-subtitle.tsx
    │   │       ├── hero-title.tsx
    │   │       └── hero-video.tsx
    │   └── ui/
    ├── config/
    │   ├── automation.tsx
    │   ├── dashboard-cards.tsx
    │   ├── integration-card.tsx
    │   ├── sidebar.tsx
    │   └── site.ts
    ├── hooks/
    │   ├── use-mobile.tsx
    │   ├── use-mutation.ts
    │   ├── use-nav.tsx
    │   ├── use-query.ts
    │   ├── use-sidebar.tsx
    │   ├── use-subscription.ts
    │   ├── use-toast.ts
    │   └── use-zod-from.ts
    ├── icons/
    ├── lib/
    │   ├── ai.ts
    │   ├── instagram-utils.ts
    │   ├── payment-provider.ts
    │   ├── prisma.ts
    │   ├── query-client.ts
    │   ├── refresh-token.ts
    │   └── utils.ts
    ├── redux/
    │   ├── store.ts
    │   └── reducer/
    │       └── automation.ts
    ├── tanstack-query/
    │   ├── prefetch.ts
    │   └── query-keys.ts
    └── types/
        └── index.ts
```

---

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/spranjal3301/Link
   cd spranjal3301-link
   ```

2. **Install Dependencies:**

   Use either npm or yarn:

   ```bash
   npm install
   ```
   or
   ```bash
   bun install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and populate it with your configuration values (API keys, database URLs, payment gateway secrets, etc.). Refer to an example file (`.env.example`) if available.

4. **Setup Prisma:**

   Generate the Prisma client and run migrations:

   ```bash
   bun run postinstall
   ```

---

## Running the Application

- **Development Mode:**

  Run the development server:

  ```bash
  bun run dev
  ```

- **Production Build:**

  Build and start the application:

  ```bash
  bun run build
  bun run start
  ```

---

## Payment Gateway Integration

Link is integrated with secure payment gateways (such as Razorpay and Stripe) for processing payments. Ensure that you have the appropriate API keys and secrets configured in your environment variables to enable payment functionalities.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request describing your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, please reach out at [your-email@example.com].

---

Start automating your Instagram interactions with AI and streamline your social media management with Link!