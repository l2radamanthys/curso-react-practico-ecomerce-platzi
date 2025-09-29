import Layout from "../../Components/Layout";

const SignOut = () => {
  const logout = () => {
    console.log("Log out");
  };

  return (
    <Layout>
      <h1 className="my-4">Sign Out</h1>
      <form onSubmit={logout} className="space-y-4 mt-4">
        <label className="block text-gray-600 text-center">
          ¿Seguro que quieres salir?
        </label>

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="bg-black text-white rounded-lg w-80 p-4 mb-4 hover:bg-gray-800"
          >
            Salir
          </button>
        </div>
      </form>
    </Layout>
  );
};

export { SignOut };
