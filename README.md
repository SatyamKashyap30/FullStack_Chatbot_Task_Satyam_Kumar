# DroneTV AI Support & Lead Assistant

A full-stack web application created for the Full Stack Developer Intern technical assignment.

The application provides a responsive interface for DroneTV services and training, a rule-based support chatbot, an enquiry form, and an admin dashboard for managing enquiries.


## Features

- Responsive website
- Drone services and courses
- Rule-based support chatbot
- Predefined chatbot responses
- Enquiry form with validation
- Admin dashboard
- Search and filter enquiries
- View enquiry details
- Update enquiry status
- Delete enquiries
- MongoDB database integration
- REST API


## Tech Stack

Frontend: React.js, TypeScript, CSS, Vite

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Tools: Git, GitHub, Postman, VS Code


## Project Structure

FullStack_Chatbot_Task_Satyam_Kumar/
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
└── Backend/
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── models/
    │   └── routes/
    ├── package.json
    └── server.js


## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/enquiries | Get all enquiries |
| GET | /api/enquiries/:id | Get enquiry by ID |
| POST | /api/enquiries | Create a new enquiry |
| PUT | /api/enquiries/:id | Update an enquiry |
| DELETE | /api/enquiries/:id | Delete an enquiry |


## Database

MongoDB is used to store enquiry data.

Mongoose is used to connect the backend with MongoDB and perform CRUD operations.

Each enquiry stores name, email, phone, user type, service/course interest, message, status and created date.


## Environment Variables

Create a .env file inside the Backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string

The MongoDB connection string is stored in environment variables and is not included in the GitHub repository.


## How to Run

### Backend

cd Backend
npm install
node server.js

The backend runs on http://localhost:5000

### Frontend

cd Frontend
npm install
npm run dev

Open the local URL shown by Vite in the browser.


## Chatbot

The application includes a rule-based support chatbot.

It provides predefined responses for common questions about services, courses, registration, contact, students and support.

The chatbot maintains conversation history during the session and provides a clear/reset option.

No external AI or LLM API is required.


## Admin Dashboard

The admin dashboard allows the admin to view, search, filter, update and delete enquiries.

The admin can also view the complete details of an enquiry and change its status.


## Validation & Error Handling

The application includes validation for required fields, email and phone numbers, invalid enquiry IDs and failed API requests.


## Screenshots

### Home Page
![Home Page](<img width="1877" wheight="1023" alt="Screenshot 2026-10-15 160555" src="https://github.com/user-attachments/assets/7bf4d08e-5531-42d6-ba2f-96f955747786" />
)

