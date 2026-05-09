import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import auth from "./support/auth";

function AppContent() {
  let val = auth.getCookies();
  const [isvalid, setIsValid] = useState(val);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        {!isvalid && <Link to="/signup">Register</Link>}
        {isvalid && (
          <div className="navbox">
            <Link  to="/">Dashboard</Link>
            <button
              className="deletebutton"
              onClick={() => {
                auth.clearCookies();
                setIsValid(false);
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        )}
        {!isvalid && <Link to="/login">Login</Link>}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isvalid={isvalid}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
