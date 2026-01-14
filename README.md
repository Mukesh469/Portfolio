# Mukesh Kumar – Full Stack Developer Portfolio

This is my personal full-stack developer portfolio showcasing real-world projects, professional experience, and modern web development skills. The project is built with a React frontend and a Node.js/Express backend, following clean and scalable architecture practices.

Live Portfolio: https://portfolio-frontend-tu07.onrender.com/

---

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React Router
- tsParticles (performance-optimized)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Brevo (Sendinblue) Transactional Emails
- REST APIs

### Tools & Deployment
- Git & GitHub
- Netlify / Render
- Environment-based configuration

---

## Features

- Responsive and modern UI
- Optimized particle animations for desktop and mobile
- Dynamic project showcase
- Experience carousel
- Contact form with:
  - MongoDB storage
  - User confirmation email
  - Admin notification email
- Clean backend architecture (controllers, services, config)
- Production-safe async handling
- Scalable and maintainable codebase

---

## Project Structure

project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── components/data/
│   │   └── App.jsx
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md

---

## Environment Variables

Create a `.env` file inside the backend folder:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
BREVO_API_KEY=your_brevo_api_key  

---

## Installation & Setup

### Clone the repository

git clone https://github.com/Mukesh469/your-repo-name.git  
cd your-repo-name  

---

### Backend Setup

cd backend  
npm install  
npm run dev  

Backend runs on:  
http://localhost:5000  

---

### Frontend Setup

cd frontend  
npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173  

---

## Contact Form Flow

1. User submits the contact form
2. Message is saved to MongoDB
3. User receives a thank-you email
4. Admin receives a notification email with full message details
5. All operations are asynchronous and concurrency-safe

---

## Production Notes

- No shared mutable state
- Safe concurrent request handling
- Modular email service
- Easily extendable for queues, rate limiting, or CAPTCHA
- Optimized for performance and maintainability

---

## About Me

Mukesh Kumar  
Frontend / Full Stack Developer  
New Delhi, India  

I build clean, scalable, and user-focused web applications using modern frontend and backend technologies.

---


## Links

- 🌐 Live Portfolio: https://portfolio-frontend-tu07.onrender.com/
- 💻 GitHub: https://github.com/Mukesh469/
- 💼 LinkedIn: https://www.linkedin.com/in/mukesh-kumar-86a182264/
- 📧 Email: mukesh512004@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mukesh%20Kumar-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/mukesh-kumar-86a182264/)


---

## Feedback

If you find this project useful, feel free to star the repository.  
Suggestions and improvements are always welcome.

## License

This project is licensed under the MIT License.
