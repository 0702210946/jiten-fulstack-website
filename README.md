Jiten Fullstack Website
Overview
The Jiten Fullstack Website is a fully functional website for Jiten Chemical Solutions, a company specializing in the sale, dilution, and export of chemicals. This project showcases the company's mission, products, services, and contact information, as well as providing backend management features for admins to handle various tasks.

Features
Frontend: Built with HTML, CSS, and JavaScript.

Responsive design for mobile and desktop.
User-friendly product catalog and service pages.
Contact form for customer inquiries.
Backend: Powered by Node.js and MySQL.

Admin authentication for secure access.
Role-based admin system for managing products, services, and customer messages.
Secure user management and data handling.
Deployment: Hosted on GitHub Pages for frontend and connected to a backend server for full functionality.

Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MySQL
Version Control: Git, GitHub
Authentication: Custom authentication system for admin access
Deployment: GitHub Pages for frontend, Heroku or similar for backend (to be configured)
Installation
Prerequisites
Node.js and npm installed on your system.
MySQL set up and running.
Git installed.
Setup
Clone the repository:

sh
Copy
Edit
git clone https://github.com/0702210946/jiten-fulstack-website.git
Install dependencies:

Navigate to the project folder:
sh
Copy
Edit
cd jiten-fulstack-website
Install frontend dependencies:
sh
Copy
Edit
npm install
Install backend dependencies (if applicable):
sh
Copy
Edit
cd backend
npm install
Configure the Database:

Create a MySQL database and configure the necessary tables for user management and products.
Set up the .env file for the backend (API keys, database credentials, etc.).
Run the Project:

Start the backend server:
sh
Copy
Edit
npm start
The frontend should now be accessible at http://localhost:3000.
Running with Docker (Optional)
Build the Docker image:

sh
Copy
Edit
docker build -t jiten-website .
Run the Docker container:

sh
Copy
Edit
docker run -p 3000:3000 jiten-website
Admin Panel
The admin panel allows authorized users to log in and manage products, services, and contact inquiries.
Admins can update the product catalog, manage customer messages, and handle other backend tasks.
Admin Authentication
Each admin has a unique username and password for secure login.
If an admin forgets their password, they can reset it using their company email.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with improvements or bug fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

