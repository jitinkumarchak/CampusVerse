// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import Chats from "./Components/Chats";
import Events from "./Components/Events";
import Internships from "./Components/Internships";
import Notes from "./Components/Notes";
import Clubs from "./Components/Clubs";
import Competitions from "./Components/Competitions";
import Settings from "./Components/Settings";
import Welcome from "./Components/Welcome";
import Profile from "./Components/Profile";


// Auth Pages
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Auth from "./Components/Auth/Auth";

// Protected Route Wrapper
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // or your auth logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/auth" element={<Auth />} />

      {/* Main Layout with protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/welcome" element={<Welcome />} />
        <Route index element={<Dashboard />} />
        <Route path="chats" element={<Chats />} />
        <Route path="events" element={<Events />} />
        <Route path="internships" element={<Internships />} />
        <Route path="notes" element={<Notes />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="competitions" element={<Competitions />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
