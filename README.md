📇 Contact Management App (MERN Stack)

A simple and clean Contact Management Web Application built using the MERN stack, demonstrating full-stack fundamentals with a focus on usability, clean UI, and real-world UX handling.

🚀 Features

1.Add a new contact with validation
2.View all saved contacts instantly (no page reload)
3.Delete contacts
4.Success & error feedback using toast messages
5.Loading and empty state handling
6.Clean, responsive UI with a custom color palette

🛠 Tech Stack

--Frontend

1.React.js
2.Tailwind CSS
3.JavaScript (ES6+)
4.useState, useEffect

--Backend

1.Node.js
2.Express.js
3.MongoDB
4.Mongoose

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

🧠 UX & Design Decisions

1.Client-side validation to prevent invalid submissions
2.Toast notifications for success and error feedback
3.Loading state while fetching contacts
4.Empty state message when no contacts are available
5.Reusable components (Button)
6.Clean, calm custom color palette for a professional look

📂 Project Structure

Backend

backend/
├─ config/
├─ controllers/
├─ models/
├─ routes/
└─ server.js

Frontend

frontend/
├─ components/
│ ├─ ContactForm.jsx
│ ├─ ContactList.jsx
│ ├─ Button.jsx
│ └─ Toast.jsx
├─ App.js
└─ index.css

▶️ How to Run the Project

Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm start

Make sure MongoDB is running or a MongoDB Atlas URI is configured.

🎯 Why This Project

1.This project was built to:
2.Demonstrate full-stack MERN fundamentals.
3.Show clean component architecture.
4.Handle real-world UX scenarios like loading, empty, and error states.
5.Focus on clarity and maintainability rather than over-engineering.

📌 Notes

1.No authentication is included intentionally to keep the scope focused.
2.UI improvements were prioritized without adding unnecessary complexity.
3.Designed to match typical technical interview task requirements.

👤 Author

Devansh Kumar
