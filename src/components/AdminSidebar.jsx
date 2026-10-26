function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-8">Menu</h2>

      <ul className="space-y-4">
        <li className="hover:text-orange-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-orange-400 cursor-pointer">
          Contacts
        </li>

        <li className="hover:text-orange-400 cursor-pointer">
          Materials
        </li>

        <li className="hover:text-orange-400 cursor-pointer">
          Services
        </li>

        <li className="hover:text-orange-400 cursor-pointer">
          Settings
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;