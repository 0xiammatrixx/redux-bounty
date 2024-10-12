OmniMart
OmniMart is an all-purpose marketplace eCommerce application where both consumables and non-consumables can be sold. The app allows users to register, log in, manage products, and make purchases.

Table of Contents
Features
Technologies Used
Setup Instructions
Interacting with the App
Contributing
License
Features
User authentication (registration and login)
Role-based access (admin, seller, shopper)
Product posting and purchasing
View available products and details
Shopping cart functionality
Technologies Used
React
Redux Toolkit
ViteJS
TailwindCSS
Node.js
Express.js
MongoDB (or any database you're using)
JWT for authentication (if applicable)
Setup Instructions
To set up the OmniMart application on your local machine, follow these steps:

Prerequisites
Node.js (version 14 or higher)
npm (Node Package Manager)
MongoDB (or any database you're using)
Clone the Repository
bash
Copy code
git clone <repository-url>
cd omnimart
Install Dependencies
From the root of the project, run:

bash
Copy code
npm install
Start the Backend
Navigate to the backend directory (if applicable) or run the following command from the root if your backend is in the same directory:
bash
Copy code
npm run start:backend
Ensure your MongoDB service is running (if applicable).
Start the Frontend
In a new terminal window, navigate to the root of the project and run:

bash
Copy code
npm run dev
This will start the Vite development server and open the app in your default browser.

Interacting with the App
Registration: Users can register by clicking the "Register" link and filling in the required fields.
Login: After registration, users can log in using their credentials. Make sure to select the correct role (shopper, seller, or admin) during login.
View Products: After logging in, users can view available products on the homepage and navigate to the dashboard.
Add to Cart: Logged-in users can add items to their cart from the product listing.
Checkout: Users can navigate to their cart and proceed to checkout.