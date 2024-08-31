

# JobVikas

**JobVikas** is a comprehensive job portal application designed to connect job seekers with employers. The platform provides a seamless experience for users to create profiles, search for jobs, and apply directly to companies. Employers can post job listings, manage applications, and find the right candidates.

## Features

- **User Authentication**: Secure login and registration system with JWT-based authentication.
- **Profile Management**: Users can create and update their profiles, including uploading a profile picture and resume.
- **Job Listings**: View and search for job openings by various filters such as location, job type, and company.
- **Application Tracking**: Users can apply to jobs and track their application status.
- **Employer Dashboard**: Employers can post job listings, manage applications, and search for candidates.
- **Real-time Notifications**: Get notified in real-time about job updates and application statuses.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Services**: Cloudinary for storing profile images and resumes
- **Authentication**: JWT for secure user sessions

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aman-gupta-16/JobVikas.git
   cd JobVikas
   ```

2. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   cd backend
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the application:**

   ```bash
   cd backend
   npm run dev
   cd fronterd
   npm run dev
   ```

   The server should now be running at `http://localhost:3000`.
   The frontend should now be running at `http://localhost:5173`.

## Usage

1. **User Registration and Login:**
   - New users can sign up for an account and log in to access job listings and profile management features.

2. **Profile Management:**
   - Once logged in, users can create and update their profiles, including uploading their resumes and profile pictures.

3. **Job Search and Application:**
   - Users can browse and filter job listings and apply to jobs directly through the platform.

4. **Employer Features:**
   - Employers can create an account to post job listings and manage applications from their dashboard.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing code style and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or support, please contact:

- **Aman Gupta**: [Email](mailto:amangupta@example.com)  
- **GitHub**: [aman-gupta-16](https://github.com/aman-gupta-16)

---
