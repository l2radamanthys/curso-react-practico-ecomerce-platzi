import Layout from "../../Components/Layout";

function MyAccount({ activeUser }) {
  return (
    <Layout>
      <div className="w-full max-w-2xl my-2 mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center mb-4 font-medium text-xl">My Account</h1>
        <div className="mb-2 text-left">
          <p>Name: {activeUser?.name}</p>
        </div>
        <div className="text-left">
          <p>Email: {activeUser?.email}</p>
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount;
