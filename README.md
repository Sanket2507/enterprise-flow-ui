# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.


Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)














3-Day Project Rebuild Guide: Enterprise Flow UI
This guide is designed to help you rebuild the Enterprise Flow UI from scratch over 3 days. It breaks down the work into manageable chunks, perfect for showing daily progress to your lead.

Prerequisites
Node.js installed on your machine.
Code Editor (VS Code recommended).
Day 1: Foundation & Setup
Objective: Initialize the project, set up the design system (Tailwind + Shadcn), and build the authentication layer.

1. Project Initialization
Run these commands in your terminal:

bash
npm create vite@latest enterprise-flow-ui -- --template react-ts
cd enterprise-flow-ui
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @types/node -D
Edit 
tsconfig.json
 and 
vite.config.ts
 to support path aliases (e.g., @/).

2. Install Dependencies
bash
# Core
npm install react-router-dom @tanstack/react-query lucide-react clsx tailwind-merge
# UI Components (Headless)
npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-toast @radix-ui/react-tooltip
# Utils
npm install class-variance-authority date-fns recharts
3. Files to Write (Day 1)
Create these files to establish the base structure.

Configuration
 
vite.config.ts
 (Update for path alias)
 
tsconfig.app.json
 (Update for path alias)
 tailwind.config.js (Add colors/animations)
 
src/index.css
 (Add Tailwind directives & global logic)
Core Utilities
 src/lib/utils.ts (cn helper function)
Authentication & State
 src/store/auth-context.tsx (Context for user login state)
Basic Components (Copy Shadcn Code)
 src/components/ui/button.tsx
 src/components/ui/input.tsx
 src/components/ui/card.tsx
 src/components/ui/toaster.tsx
Initial Pages
 
src/pages/LoginPage.tsx
 (Simple form interacting with AuthContext)
End of Day 1 Milestone: You should be able to run npm run dev, see a Login page, and "log in" (changing state).

Day 2: Core Layout & Navigation
Objective: Build the main application shell (Sidebar/Header) and the Dashboard.

1. Files to Write (Day 2)
Layout
 src/components/layout/Sidebar.tsx (Navigation links with Icons)
 src/components/layout/Header.tsx (User profile dropdown, theme toggle)
 src/components/layout/AppLayout.tsx (Combines Sidebar + Header + Outlet)
Routing Logic
 
src/App.tsx
 (Define Routes: /, /login, /sales, etc., verify Auth protection)
 
src/main.tsx
 (Wrap App in Providers: Auth, Query, Tooltip)
Dashboard
 
src/pages/DashboardPage.tsx
 (The landing page after login)
 src/components/dashboard/StatCard.tsx (Reusable card for numbers)
 src/components/dashboard/RecentActivity.tsx (List of recent items)
Placeholder Modules (for routing test)
Create empty components just to verify navigation works:

 src/modules/sales/SalesPage.tsx
 src/modules/inventory/InventoryPage.tsx
 src/modules/finance/FinancePage.tsx
 src/modules/hr/HRPage.tsx
End of Day 2 Milestone: login works -> redirects to Dashboard -> Sidebar navigation works -> You can visit empty placeholders for all modules.

Day 3: Feature Implementation & Polish
Objective: Flesh out complex modules with data tables/charts and finalize UI.

1. Files to Write (Day 3)
Data Components (Shadcn)
 src/components/ui/table.tsx
 src/components/ui/dialog.tsx (For modals)
 src/components/ui/badge.tsx
Chart Components
 src/components/shared/Chart.tsx (Wrapper for Recharts)
Module Implementation (Pick 1-2 deep dives)
Flesh out Sales and Inventory to look real.

 src/modules/sales/SalesPage.tsx (Add a Table of orders + a Chart)
 src/modules/inventory/InventoryPage.tsx (Grid of items with stock levels)
Polish
 
src/pages/NotFound.tsx
 (404 Page)
 Check 
src/index.css
 for missing fonts/styles.
End of Day 3 Milestone: A fully navigable app with a working Dashboard and 1-2 functional modules displaying styled data.

Folder Structure to Create
text
src/
├── components/
│   ├── layout/       # AppLayout, Header, Sidebar
│   ├── shared/       # Common charts, datatables
│   └── ui/           # Shadcn basic components
├── lib/              # utils.ts
├── modules/          # sales/, inventory/, etc.
├── pages/            # DashboardPage, LoginPage
├── store/            # auth-context.tsx
├── App.tsx
├── index.css
└── main.tsx

Comment
Ctrl+Alt+M
