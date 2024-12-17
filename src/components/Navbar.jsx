import { useEffect, useState } from "react";
import Form from "./Form";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); 
      localStorage.setItem("theme", "dark"); 
    } else {
      document.documentElement.classList.remove("dark"); 
      localStorage.setItem("theme", "light"); 
    }
  }, [darkMode]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="p-4 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            E-Commerce
          </h1>
          <button
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 dark:bg-gray-800 md:bg-transparent md:flex md:space-x-4 ${
              menuOpen ? "block" : "hidden"
            }`}
            style={{ zIndex: 10 }}
          >
            <li>
              <a href="#home" className="block p-2 text-gray-800 dark:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="block p-2 text-gray-800 dark:text-white">
                Loja
              </a>
            </li>
            <li>
              <button
                onClick={() => setModalOpen(true)}
                className="block p-2 text-gray-800 dark:text-white"
              >
                Contato
              </button>
            </li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="block p-2 text-gray-800 dark:text-white"
              >
                {darkMode ? "🌙 Escuro" : "☀️ Claro"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-300"
            >
              ✖
            </button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
