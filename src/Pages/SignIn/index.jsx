import Layout from "../../Components/Layout";
import { LoginForm } from "../../Components/LoginForm";

function SignIn() {
  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <Layout>
      <h1>Sign In</h1>
      <LoginForm onSubmitEvent={onSubmit} />
    </Layout>
  );
}

export default SignIn;
