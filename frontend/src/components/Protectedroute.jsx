import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isvalid, children }) {
  if (!isvalid) {
    return <Navigate to="/login" replace />;
  }
  return children;
}