function AdminNavbar() {
  return (
    <nav className="bg-slate-900 text-white h-16 flex items-center justify-between px-6 shadow">
      <h1 className="text-2xl font-bold">
        Gulf Scrap Admin
      </h1>

      <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">
        Logout
      </button>
    </nav>
  );
}

export default AdminNavbar;