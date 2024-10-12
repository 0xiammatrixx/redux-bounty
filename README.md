# E-commerce Website

This website is a fully functional e-commerce platform that supports multiple roles such as **Admin**, **Seller**, and **Shopper**. Each role has its own set of permissions and functionalities. This README file will guide you through the key features, how to set up and run the project using Gitpod, and how to interact with the app based on different roles.

## Key Features

- **Role-Based Authentication**: Users can sign in as Admins, Sellers, or Shoppers, each with specific permissions.
  - **Admin**: Manages users.
  - **Seller**: Can post and manage products.
  - **Shopper**: Can browse products, add items to the shopping cart, and make purchases.
- **Product Management**: Sellers can post new products, edit product details, and manage their listings.
- **Shopping Cart**: Shoppers can add products to their shopping cart, review their cart, and proceed to checkout.
- **Responsive Design**: The website is fully responsive, providing an optimal user experience on both desktop and mobile devices.

**TAKE NOTE: THE NAVIGATION BAR IS COLLAPSED BY DEFAULT, YOU CAN OPEN IT FROM THE TOP RIGHT MENU BUTTON**

## Prerequisites

To run this project locally or in a cloud-based development environment like Gitpod, you will need the following:

- **Node.js**
- **npm** (Node Package Manager)
- **MongoDB** (Local installation or a cloud MongoDB instance)

## How to Run the App Using Gitpod

To set up and run this project in a Gitpod workspace, follow these steps:

1. **Clone the Repository**:
   - In your Gitpod workspace terminal, clone the repository:
     ```bash
     git clone https://github.com/0xiammatrixx/redux-bounty.git
     ```

2. **Install Node.js**:
   - If Node.js is not pre-installed in your Gitpod environment, install it with:
     ```bash
     sudo apt install nodejs
     ```

3. **Install npm**:
   - Install npm (Node package manager) if not available:
     ```bash
     sudo apt install npm
     ```

4. **Install MongoDB**:
   - To install MongoDB in your Gitpod environment:
     ```bash
     npm install mongodb
     ```

5. **Install Project Dependencies**:
   - Navigate to the project directory and install the required dependencies:
     ```bash
     cd redux-bounty
     npm install
     ```

6. **Run the Frontend**:
   - From the project root directory, start the frontend:
     ```bash
     npm run dev
     ```

7. **Run the Backend**:
   - In a new terminal, go to the `backend` directory to start the backend server:
     ```bash
     cd redux-bounty
     cd backend
     npm start
     ```

8. **Access the App**:
   - Once the app is running, Gitpod will provide you with a public URL. You can access the app via that URL.
   - Make the ports public

## How to Interact with the App

### Role-Based Capabilities

- **Admin**:
  - Can manage users,
  - Has the ability to edit, delete, or update any user or product on the platform.
  
- **Seller**:
  - Can post new products, update or remove existing products.

- **Shopper**:
  - Can browse available products, add items to their shopping cart, and proceed to checkout.
  - Can manage their cart, remove items, and view product details.

### User Flow
- **Login/Register**: Users can register as new users or log in with an existing account.
- **Dashboard**: Upon login, users will be directed to the homepage, where they can access their role-specific dashboards (Admin, Seller, or Shopper).
- **Shopping**: Shoppers can view product listings, view detailed product information, and add items to their cart.

## Made With

- **Vite**: Fast build tool and development server for frontend applications.
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing the application state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **MongoDB**: NoSQL database for storing data.
- **Node.js**: JavaScript runtime for running the backend.
- **Express**: Web framework for Node.js, used to build the backend API.


