import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/pages/student/App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/auth/Login.jsx";
import Signup from "./components/pages/auth/Signup.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Browse from "./components/pages/student/Browse.jsx";
import Jobs from "./components/pages/student/Jobs.jsx";
import Profile from "./components/pages/student/Profile.jsx";
import JobDescription from "./components/pages/student/JobDescription.jsx";
import Companies from "./components/pages/admin/Companies.jsx";
import CompanyCreate from "./components/pages/admin/CompanyCreate.jsx";
import CompanySetup from "./components/pages/admin/CompanySetup.jsx";
import AdminJobs from "./components/pages/admin/AdminJobs.jsx";
import PostJob from "./components/pages/admin/PostJob.jsx";
import Applicants from "./components/pages/admin/Applicants.jsx";
import ProtectedRoute from "./components/components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // admin ke liye yha se start hoga
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  </StrictMode>
);
