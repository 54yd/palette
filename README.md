
![localhost-3000-upload-10-28-2024_11_13_AM](https://github.com/user-attachments/assets/47d43666-0b13-4199-9038-8100696023ff)
# 🚀 Project Overview

This project is a web application built with TypeScript using **React**, **Next.js**, and **Prisma** for the backend. It includes features such as authentication, user management, product pages. each product page has routed. Product Manupilation API CRUD is also implemented. (**THIS PRJ needs to .env for NEXTAUTH and your CALLBACKURL, and your Database! we recommend use sqlite at first and prismastudio to add record.** ) 

ALSO, FEEL FREE TO USE COMPONENT I CREATED (I PLACED THEM EACH PAGE AS EXAMPLE) 

# 📂 Sample Components (included)

 - Authentication Component
 - Product List Component
 - User Profile Component
 - File Upload Component
 - Card Component
 - Beautiful and Clean Animations (at All Page + Each Component)

## 📂SCHEMA
![prisma_schema_er_diagram](https://github.com/user-attachments/assets/b97600a5-d04e-4d02-a6bb-bebd3a797394)


## 📂 File Structure

```
prisma/
├── migrations/          # 📜 Migration scripts for database changes
├── schema.prisma        # 📊 Prisma schema defining the database structure
├── seed/                # 🌱 Seeding data to the database
└── db/dev.db            # 💾 Local SQLite database for development
src/
├── app/
│   ├── api/                 # 🛠️ API routes for the backend
│   │   ├── auth/            # 🔐 Authentication-related API endpoints
│   │   ├── user/route.ts    # 👤 API route for user management
│   │   ├── product/         # 🛍️ API routes related to products
│   │   └── upload/          # 📤 API route for file uploads
│   ├── home/                # 🏠 Pages for the home section
│   ├── user/                # 👤 Pages for user management
│   ├── product/             # 🛍️ Pages for viewing and managing products
│   ├── upload/              # 📤 Pages for file upload
│   ├── login.tsx            # 🔐 Login page component
│   ├── layout.tsx           # 🎨 Layout component for consistent styling
│   ├── _provider.tsx        # 🏗️ Context providers
│   ├── _rootContainer.tsx   # 🌳 Root container for the app
│   └── _html.tsx            # 🌐 HTML structure for the app
├── common/
│   ├── components/          # 🧩 Reusable UI components (e.g., DropZone)
│   ├── containers/          # 📦 Containers used for layout and transitions
│   ├── lib/                 # 📚 Library files for handling Prisma and authentication
│   ├── styles/              # 💅 Global styles
│   └── utils/               # 🔧 Utility functions used across the app
```

## ✨ Key Features

- **🔐 User Authentication**: Handled through the `/api/auth` routes.
- **👥 User Management**: Manage users through the `/api/user` route and UI pages.
- **🛍️ Product Management**: View and manage products via `/api/product` routes and UI pages.
- **📤 File Upload**: Upload files using the `/api/upload` endpoint and corresponding UI.
- **📊 Database**: Managed using Prisma with migrations, seeds, and schema definitions.

## 🛠️ Installation

To set up and run this project locally:

1. **Install Dependencies**:
   ```sh
   npm install
   ```

2. **Set up Prisma Database**:
   Update the `.env` file with your database connection string, then run the following commands to set up the database:
   ```sh
   npx prisma generate
   npx prisma migrate dev
   ```

3. **Run the Development Server**:
   ```sh
   npm run dev
   ```

## 🧰 Dependencies

This project uses the following technologies:

- **⚛️ React** for the frontend.
- **🌐 Next.js** for server-side rendering and routing.
- **📊 Prisma** for ORM and database management.
- **🔷 TypeScript** for type-safe JavaScript development.
- **🎨 Tailwind CSS** for styling.


## 📁 Folder and File Descriptions

- **`app/`**: Main pages and API routes for the application.
  - **API Routes**: Server-side logic for user, product, and file management.
  - **UI Pages**: Components for login, home, user, and product pages.
- **`prisma/`**: Database operations.
  - **Schema and Migrations**: Defines tables and manages changes.
  - **Seeding**: Populates the database with initial data.
- **`common/`**: Reusable UI components, utilities, and global styles.
  - **Components**: UI elements like `DropZone`.
  - **Utilities**: Helper functions and hooks like `fileCreator` and `useIsMounted`.
