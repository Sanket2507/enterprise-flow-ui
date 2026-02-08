

# ERP Frontend Application Plan

## Overview
A modern, full-featured ERP system with six core modules (Sales, Inventory, Finance, HR, Manufacturing, Analytics), built with React + Tailwind CSS, powered by a Supabase backend, and designed with a modern enterprise aesthetic (balanced density and polish, similar to Monday.com/Odoo).

---

## Design & Layout

### Global Layout
- **Collapsible sidebar** with module icons and labels — collapses to icon-only mini mode
- **Top header bar** with breadcrumbs, global search, notifications bell, and user avatar/menu
- **Main content area** with consistent page structure: page title, action buttons, filters, and content
- **Color scheme**: Professional blues/grays with accent colors per module for quick visual identification

### Design Principles
- Data tables with sorting, filtering, and pagination as a core pattern
- Card-based KPI summaries at the top of each module dashboard
- Consistent form layouts using dialogs/drawers for create/edit flows
- Toast notifications for actions, inline validation for forms

---

## Module Screens

### 1. Dashboard (Home)
- Role-aware welcome with key KPIs across modules
- Recent activity feed
- Quick action buttons (New Order, New Invoice, etc.)
- Summary charts (revenue trend, inventory levels, headcount)

### 2. Sales Module
- **Orders list** — table with status badges, filters by date/status/customer
- **Order detail** — line items, status timeline, notes
- **Customers list** — searchable directory with contact info
- **Customer detail** — order history, contact details
- **Products catalog** — grid/table view toggle, pricing info

### 3. Inventory Module
- **Stock overview** — table with current quantities, reorder alerts
- **Warehouses** — list of locations with stock summaries
- **Stock movements** — log of inbound/outbound with filters
- **Low stock alerts** — flagged items below threshold

### 4. Finance Module
- **Invoices list** — status (draft/sent/paid/overdue), filters
- **Invoice detail** — line items, payment status, PDF preview placeholder
- **Payments log** — received/sent payments
- **Financial dashboard** — revenue charts, expense breakdown, cash flow

### 5. HR Module
- **Employee directory** — searchable list with department filters
- **Employee profile** — personal info, role, department, documents
- **Departments** — org structure view
- **Leave management** — requests list, approval workflow placeholder

### 6. Manufacturing Module
- **Production orders** — list with status tracking
- **Bill of materials** — component lists per product
- **Work centers** — capacity and status overview

### 7. Analytics Module
- **Custom dashboard** with charts powered by Recharts
- Revenue trends, order volume, inventory turnover
- Module-specific drill-down views
- Date range selectors and comparison periods

---

## Authentication & Roles

### Phase 1 (Initial Build)
- Mock login page with role selector (Admin, Manager, Employee) for development and demo
- Role-based sidebar visibility — different modules shown per role
- Protected routes that redirect unauthenticated users

### Phase 2 (Future — SSO Integration)
- Architecture prepared for external auth provider swap
- Auth context abstracted so SSO can replace mock auth without UI changes

### Role-Based Access
- **Admin**: Full access to all modules and settings
- **Manager**: Access to Sales, Inventory, Finance, Manufacturing, Analytics
- **Employee**: Access to HR (own profile, leave) and limited views

---

## Backend (Supabase)

### Database Tables
- `user_roles` — role assignments (admin/manager/employee)
- `customers`, `products`, `orders`, `order_items`
- `inventory_items`, `warehouses`, `stock_movements`
- `invoices`, `invoice_items`, `payments`
- `employees`, `departments`, `leave_requests`
- `production_orders`, `bill_of_materials`, `work_centers`

### API Strategy
- All data access via Supabase client (`.from().select()`, etc.)
- Row-Level Security on all tables using `has_role()` security definer function
- Edge functions for complex operations (e.g., invoice generation, stock calculations)
- React Query for data fetching, caching, and optimistic updates

---

## Technical Architecture

### State Management
- React Query for server state (API data)
- React Context for auth/role state and UI preferences (sidebar, theme)

### Folder Organization
```
src/
├── components/        # Shared UI components (DataTable, PageHeader, KPICard)
├── pages/             # Route-level page components
├── modules/           # Module-specific components and logic
│   ├── sales/
│   ├── inventory/
│   ├── finance/
│   ├── hr/
│   ├── manufacturing/
│   └── analytics/
├── services/          # Supabase query functions per module
├── hooks/             # Shared custom hooks
├── store/             # Auth context, UI preferences
├── utils/             # Formatters, validators, constants
└── styles/            # Global styles and theme
```

---

## Implementation Order
1. **Global layout** — sidebar, header, routing for all modules
2. **Auth mock** — login page, role context, protected routes
3. **Shared components** — DataTable, KPICard, PageHeader, StatusBadge
4. **Dashboard** — home page with summary KPIs and charts
5. **Sales & Inventory** — full CRUD screens with Supabase tables
6. **Finance** — invoices, payments, financial charts
7. **HR & Manufacturing** — employee management, production tracking
8. **Analytics** — cross-module charts and reporting
9. **Supabase setup** — database schema, RLS policies, edge functions

