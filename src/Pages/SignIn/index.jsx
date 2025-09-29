import React from "react";
import Layout from "../../Components/Layout";
import { LoginForm } from "../../Components/LoginForm";
import { useNavigate } from "react-router-dom";

function SignIn({ logIn }) {
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    const result = logIn(event.email, event.password);
    if (!result) {
      setError("Invalid email or password");
    } else {
      navigate("/");
    }
  };

  return (
    <Layout>
      <h1 className="my-4 font-medium text-xl">Sign In</h1>
      <LoginForm onSubmitEvent={onSubmit} />
      {error && <p className="text-red-500">{error}</p>}
    </Layout>
  );
}

export default SignIn;
