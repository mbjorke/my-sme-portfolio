# Project Plan for Multi-Customer Application

## 1. Project Setup

- Create a new project using the following command:

  ```bash
  npx create-next-app -e with-supabase my-new-supabase-app
  ```

- Navigate to the new project directory:

  ```bash
  cd my-new-supabase-app
  ```

- Set up environment variables by creating a `.env.local` file in the project root and adding your Supabase URL and anon key:

  ```
  NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
  ```

- Run the development server to ensure everything is working:

  ```bash
  npm run dev
  ```

This approach ensures that everything is set up correctly from the start, providing a fresh environment with the necessary configurations for Supabase and Next.js.

- **Objective**: Deploy the application for multiple customers, allowing for unique configurations and user management.

## 2. Key Concepts

- **Customers**: Entities using the application with unique configurations.
- **Users**: Individuals belonging to a customer, with potentially multiple users per customer.

## 3. Environment Variables

- Use separate `.env` files for each customer to manage configurations.
- **Example structure**:
  ```
  /customers/
    ├── blueberry-site/
    │   └── .env
    ├── robwatkins-site/
    │   └── .env
  ```

## 5. Project Setup

- Create a new project using the following command:

  ```bash
  npx create-next-app -e with-supabase my-new-supabase-app
  ```

  This approach ensures that everything is set up correctly from the start, providing a fresh environment with the necessary configurations for Supabase and Next.js.

- **Customers Table**: Stores customer-specific information.
- **Users Table**: Stores user-specific information with a foreign key linking to the Customers table.

## 5. Implementation Strategy

- **Dynamic Loading of Environment Variables**:
  - Implement a mechanism to load the appropriate `.env` file based on the customer context.
- **API Routes**:

  - Structure API routes to handle requests based on customer context.

- **User Management**:

  - Build functionality for creating, updating, and deleting users associated with the correct customer.

- **Run psql command to create the customers table**:

  ```bash
  psql -h db.mlasxurqjtbeglbnrrmy.supabase.co -U mbjorke@gmail.com -d blueberry_site -W -c "CREATE TABLE customers (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
  ```

  This command is currently stuck and needs to be executed to proceed with the database setup.

- **Single vs. Multiple `.env` Files**: Decide on the approach for managing environment variables.
- **Database Design**: Plan the structure for accommodating multiple customers and their users.

## 7. Next Steps

- Clarify the database structure.
- Implement dynamic loading of environment variables.
- Focus on user management functionality.
