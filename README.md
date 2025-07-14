# Password Manager

A full-stack Password Manager application built with React (frontend) and Node.js/Express/MongoDB (backend).  
It allows you to securely store, view, and manage your passwords for different domains.

## Features

- Add, view, and delete passwords
- Passwords are encrypted in the database using AES-256-CBC
- Responsive UI built with React and Tailwind CSS
- Copy password to clipboard
- Simple and clean interface

## Project Structure
passwordManager/ ├── backend/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── .env │ ├── index.js │ └── package.json └── frontend/ ├── public/ ├── src/ ├── index.html └── package.json
## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB running locally on default port

### Backend Setup

1. Go to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the `backend` folder and add:
    ```
    KEY=your-master-key-passphrase
    ```
4. Start the backend server:
    ```sh
    npm start
    ```
   The backend will run on `http://localhost:8000`.

### Frontend Setup

1. Go to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm run dev
    ```
   The frontend will run on `http://localhost:5173`.

## Usage

- Open `http://localhost:5173` in your browser.
- Add your domain, username, and password.
- View, copy, or delete your saved passwords.

## Security

- Passwords are encrypted before being stored in MongoDB.
- The encryption key is derived from the `KEY` in your `.env` file. **Keep this key secret!**

## License

- This project is for educational purposes.
- CreatedBy - Animesh Roy