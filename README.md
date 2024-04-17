# Modern Real Estate Marketplace - Beluga Estate

This repository contains the complete code for a modern real estate marketplace developed using the MERN stack (MongoDB, Express.js, React, and Node.js). The application features advanced user authentication, property listing management, and search functionalities, making it a robust solution for real estate platforms.

## Features

- **User Authentication**: Secure login and registration functionality with JWT, Firebase, and Google OAuth.
- **CRUD Operations**: Users can create, read, update, and delete real estate listings.
- **Image Upload**: Support for uploading images to enhance property listings.
- **Advanced Search**: Powerful search capabilities to help users find properties efficiently.
- **Responsive UI**: Built with React.js and Tailwind CSS for a modern, responsive user interface.
- **State Management**: Utilizes Redux Toolkit for efficient state management across the application.
- **Deployment**: Application is deployed using the Render platform for easy accessibility.

## Technologies Used

- **MongoDB**: NoSQL database for storing user and property data.
- **Express.js**: Backend framework used for building the API.
- **React.js**: Frontend library used for building the user interface.
- **Node.js**: Runtime environment for executing JavaScript on the server.
- **JWT**: For handling JSON Web Tokens in user authentication.
- **Firebase**: Backend service for additional authentication options and features.
- **Redux Toolkit**: State management toolset for React apps.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Render**: Cloud service for deploying web applications.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB instance (local or remote)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shreemantolahiri/mern-estate-app.git
   ```
2. Install NPM packages for the server:
   ```bash
   cd mern-estate-app
   npm install
   ```
3. Install NPM packages for the client:
   ```bash
   cd client
   npm install
   ```

### Environment Variables

Create a `.env` file in the project root and add the following:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
VITE_FIREBASE_API_KEY=your_google_client_id
```

### Running Locally

1. Start the backend server:
   ```bash
   npm start
   ```
2. In a new terminal, start the frontend client:
   ```bash
   cd client
   npm start
   ```
3. Visit `http://localhost:3000` in your browser.

## Deployment

The project is deployed on the Render platform. Visit the deployed application here: [Beluga Estate Live](https://mern-estate-app-b625.onrender.com/)

Follow the instructions on Render's documentation to deploy your instance of the application.

## Contributing

Contributions are welcome! Please fork this repository and open a pull request with any updates.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
