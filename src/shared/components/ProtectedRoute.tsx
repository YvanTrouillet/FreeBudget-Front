import { Navigate } from "react-router";
import { ReactNode } from "react";
import useAuth from "../hooks/AuthCheck";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Chargement...</p>;

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;
