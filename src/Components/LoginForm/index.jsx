import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSubmitEvent }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitEvent({ email, password });
  };

  const onSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white rounded-lg w-80 p-4 mb-4 hover:bg-gray-800"
      >
        sign In
      </button>

      <div className="text-center text-sm underline pb-2">
        <a href="">Forgot you password</a>
      </div>

      <button
        type="button"
        className="border-black border text-black bg-white rounded-lg w-80 p-4 mb-4 hover:border-gray-800"
        onClick={onSignUp}
      >
        sign Up
      </button>
    </form>
  );
};

export { LoginForm };
