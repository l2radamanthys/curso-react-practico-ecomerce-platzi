import React from "react";
import Layout from "../../Components/Layout";
import { AccountForm } from "../../Components/AccountForm";

const SignUp = () => {
  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <Layout>
      <h1>Sign Up</h1>
      <AccountForm onSubmitEvent={onSubmit} />
    </Layout>
  );
};

export { SignUp };
