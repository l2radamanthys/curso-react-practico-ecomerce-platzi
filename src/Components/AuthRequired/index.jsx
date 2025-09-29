import React from "react";
import { Navigate } from "react-router-dom";

function AuthRequired(props) {
  if (!props.isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }
  return props.children;
}

export { AuthRequired };
