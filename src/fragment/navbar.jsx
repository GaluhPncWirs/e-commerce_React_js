export default function Navbar() {
  function handleLogout() {
    window.location.href = "/";
    localStorage.clear();
  }
  return (
    <div className="bg-blue-400 h-16 w-full">
      <div className="flex h-full">
        <div className="basis-1/3 flex justify-center items-center">
          <h1 className="font-semibold text-xl max-w-32">
            Train Create E-Commerce
          </h1>
        </div>
        <div className="basis-2/3 flex justify-end items-center gap-10">
          <h1>Hello {localStorage.getItem("name")}</h1>
          <div className="mr-10 border border-white rounded-lg hover:bg-blue-500">
            <button
              className="px-4 py-1.5 font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}