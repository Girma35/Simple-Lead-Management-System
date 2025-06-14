# Lead Management System

A simple full-stack application for managing sales leads with Next.js frontend and Node.js backend.

![Uploading Screenshot from 2025-06-14 03-03-58.png…]()


## Features

- Add new leads with name, email, and status
- View all leads in a clean table format
- Responsive design with Tailwind CSS
- REST API backend with data validation
- Persistent data storage with MongoDB/PostgreSQL

## Tech Stack

### Frontend
- Next.js 14
- Tailwind CSS
- Axios (for API calls)
- React Hook Form (for form handling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose) / PostgreSQL (with Prisma)
- CORS middleware

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- MongoDB Atlas account OR PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Girma35/lead-management-system.git
cd lead-management-system
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
```bash
# Backend .env (in backend folder)
MONGO_URI=your_mongodb_connection_string
# OR
DATABASE_URL=your_postgresql_connection_string
PORT=5000

# Frontend .env.local (in frontend folder)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. Run the application:
```bash
# Start backend (from backend folder)
npm run dev

# Start frontend (from frontend folder)
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

- `POST /api/leads` - Create a new lead
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "status": "New"
  }
  ```

- `GET /api/leads` - Get all leads
- `GET /api/leads/:id` - Get single lead (optional)

## Project Structure

```
lead-management-system/
├── API/
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── app.js          # Express app setup
│   └── server.js       # Server entry point
├── client/
│   ├── components/     # React components
│   ├── pages/          # Next.js pages
│   │   ├── index.js    # Home page
│   │   ├── leads.js    # Lead list page
│   │   └── add.js      # Add lead page
│   └── styles/         # CSS files
├── README.md
└── .gitignore
```

## Testing with Postman

1. Import the Postman collection from `/postman` folder
2. Test endpoints:
   - POST to `http://localhost:5000/api/leads` with JSON body
   - GET to `http://localhost:5000/api/leads` to retrieve leads

## Deployment

### Frontend on Vercel
1. Push your code to GitHub
2. Create new project on Vercel
3. Connect your GitHub repository
4. Set environment variables
5. Deploy!

### Backend on Railway
1. Create new Railway project
2. Connect your GitHub repository
3. Add MongoDB/PostgreSQL plugin
4. Set environment variables
5. Deploy!

## Developer

**Girma Wakeyo**  
📧 girmawakeyo4@gmail.com  
💻 [GitHub Profile](https://github.com/Girma35)

## License

This project is licensed under the MIT License.
