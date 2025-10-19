# Paytm-wallet

This is a monorepo for a Paytm-like wallet application, built with a Next.js frontend, a bank webhook service, and shared packages for database interactions and UI components.

## Project Structure

The project is organized as a monorepo using Turborepo, with the following key packages and applications:

- `apps/user-app`: The Next.js frontend application for users to interact with the wallet.
- `apps/bank-webhook`: A service to handle incoming bank webhooks for transactions.
- `packages/db`: Contains Prisma schema and client for database interactions.
- `packages/ui`: A shared library for UI components (e.g., buttons, cards, text inputs).
- `packages/store`: A shared library for state management (e.g., balance atoms and hooks).
- `packages/eslint-config`: ESLint configurations for consistent code style.
- `packages/typescript-config`: TypeScript configurations.

## Features

- User authentication (NextAuth.js)
- Add money to wallet (on-ramp transactions)
- Peer-to-peer (P2P) transfers
- Transaction history
- Balance display
- Responsive UI components

## Technologies Used

- **Next.js**: Frontend framework for `user-app`.
- **React**: UI library.
- **TypeScript**: Type-safe JavaScript.
- **Prisma**: ORM for database access.
- **PostgreSQL**: Database.
- **Tailwind CSS**: For styling (likely used within `user-app` and `ui` components).
- **Turborepo**: Monorepo management.
- **NextAuth.js**: Authentication for Next.js applications.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)
- PostgreSQL database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Paytm-wallet.git
   cd Paytm-wallet
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create `.env` files in `apps/user-app`, `apps/bank-webhook`, and `packages/db` based on the `.env.example` files (if available) or the expected variables.

   **Example variables for `packages/db/.env`:**
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/paytmwalletdb"
   ```

   **Example variables for `apps/user-app/.env`:**
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/paytmwalletdb"
   NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
   NEXTAUTH_URL="http://localhost:3000"
   ```

   **Example variables for `apps/bank-webhook/.env`:**
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/paytmwalletdb"
   # Add any other specific webhook secrets or configurations here
   ```

4. **Database Setup:**

   Navigate to the `packages/db` directory and run Prisma migrations:

   ```bash
   cd packages/db
   pnpm prisma migrate dev --name init
   pnpm prisma db seed
   cd ../..
   ```

### Running the Applications

To run all applications in development mode:

```bash
npm dev
```

This will concurrently start the `user-app` (Next.js frontend) and `bank-webhook` services.

- The `user-app` will typically be available at `http://localhost:3000`.
- The `bank-webhook` will run on its configured port (check `apps/bank-webhook/src/index.ts` or logs for details, usually 3003 or similar).

### Building for Production

To build all applications for production:

```bash
npm build
```

## Linting

To lint all projects:

```bash
npm lint
```

