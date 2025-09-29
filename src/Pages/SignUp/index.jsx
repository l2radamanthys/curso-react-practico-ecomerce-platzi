import React from "react";
import Layout from "../../Components/Layout";
import { AccountForm } from "../../Components/AccountForm";
import { useNavigate } from "react-router-dom";

const SignUp = ({ addAccount }) => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const onSubmit = (event) => {
    const result = addAccount(event);
    if (result) {
      navigate("/sign-in");
    } else {
      setError(
        `Error creating account email: "${event.email}" already exists.`
      );
    }
  };

  return (
    <Layout>
      <h1 className="my-4 font-medium text-xl">Sign Up</h1>
      <AccountForm onSubmitEvent={onSubmit} />
      {error && <p className="text-red-500">{error}</p>}
    </Layout>
  );
};

export { SignUp };
