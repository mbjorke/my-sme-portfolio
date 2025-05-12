# SME Portfolio & Contact Site

A modern, accessible portfolio and contact site for small businesses or professionals, built with Next.js, TypeScript, and Supabase.

## Features

- Beautiful, consistent UI with unified button and card styles
- Responsive carousel and testimonials
- Accessible contact form with anti-bot honeypot
- Stores contact messages securely in Supabase
- Ready for deployment on Spaceship, Vercel, or any Next.js host

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

````

2. **Install dependencies**
   ```bash
npm install
````

3. **Set up environment variables**
   Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

````

4. **Start the development server**
   ```bash
npm run dev
````

Visit [http://localhost:3000](http://localhost:3000)

## Deployment

- Connect your repo to Spaceship, Vercel, or your preferred Next.js host
- Set the same environment variables in your deployment dashboard
- For Spaceship, see their docs for custom domain and email setup

## Contact Form & Supabase

- Submits messages to the `contact_messages` table in Supabase
- Anti-bot protection via hidden honeypot field
- Easily extend to send email notifications (see `/api/contact`)

## License

See [LICENSE](./LICENSE).

---

Built with ❤️ by [yourname].

To enable TypeScript's features, we install the type declarations for React and Node.

```shell
npm install --save-dev @types/react @types/react-dom @types/node
```

```shell
yarn install --save-dev @types/react @types/react-dom @types/node
```

```shell
pnpm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
