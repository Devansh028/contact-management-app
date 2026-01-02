📇 Contact Management App (MERN Stack)

A simple and clean Contact Management Web Application built using the MERN stack, demonstrating full-stack fundamentals with a focus on usability, clean UI, and real-world UX handling.

🚀 Features

Add a new contact with validation

View all saved contacts instantly (no page reload)

Delete contacts

Success and error feedback using toast messages

Loading and empty state handling

Clean, responsive UI with a custom color palette

🛠 Tech Stack
Frontend

React.js

Tailwind CSS

JavaScript (ES6+)

React Hooks (useState, useEffect)

Backend

Node.js

Express.js

MongoDB

Mongoose

📋 Contact Form Fields

| Field   | Validation         |
| ------- | ------------------ |
| Name    | Required           |
| Email   | Valid email format |
| Phone   | Required           |
| Message | Optional           |

The Submit button is disabled until all required fields are valid.

🔌 API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/contacts`     | Create a new contact |
| GET    | `/api/contacts`     | Fetch all contacts   |
| DELETE | `/api/contacts/:id` | Delete a contact     |

🎨 UX & Design Decisions

Client-side validation to prevent invalid submissions

Toast notifications for success and error feedback

Loading state while fetching contacts

Empty state message when no contacts are available

Reusable components (Button)

Clean, calm custom color palette for a professional look

📂 Project Structure

--Backend

backend/
├── config/
├── controllers/
├── models/
├── routes/
└── server.js

--Frontend

frontend/
├── components/
│   ├── ContactForm.jsx
│   ├── ContactList.jsx
│   ├── Button.jsx
│   └── Toast.jsx
├── App.js
└── index.css


▶️ How to Run the Project

--Backend

cd backend
npm install
npm run dev

--Frontend

cd frontend
npm install
npm start

Make sure MongoDB is running or a MongoDB Atlas URI is configured.

🎯 Why This Project

This project was built to:

Demonstrate full-stack MERN fundamentals

Show clean component architecture

Handle real-world UX scenarios like loading, empty, and error states

Focus on clarity and maintainability rather than over-engineering

📌 Notes

Authentication is intentionally excluded to keep the scope focused

UI improvements were prioritized without adding unnecessary complexity

Designed to match typical technical interview task requirements

👤 Author

Devansh Kumar
