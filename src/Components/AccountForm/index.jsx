import React from "react";

const AccountForm = ({ onSubmitEvent }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitEvent({ name, email, password });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          />
        </div>
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
          Create
        </button>
      </form>
    </>
  );
};

export { AccountForm };
