import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "https://a00573055.pythonanywhere.com/login";
const regex = /profe/;

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    // Hardcoded credentials check
    if (username === "admin" && password === "1234") {
      sessionStorage.setItem("token", "admin");
      sessionStorage.setItem("nombre", "admin");
      sessionStorage.setItem("director", "admin");
      sessionStorage.setItem("id", "1");

      onLoginSuccess();
      navigate("/");
    } else {
      alert("Credenciales incorrectas. Usuario: admin, Contraseña: 1234");
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <img className="absolute top-1/20  z-10" src="/logo.png" alt="logo" />
      <div className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6">
        <h1 className="text-2xl font-semibold text-gray-100 mb-4">
          Bienvenido
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label htmlFor="username" className="font-medium text-gray-400">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Ingresa el usuario"
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 ring-2 ring-gray-700 backdrop-blur-md outline-none focus:ring-blue-600 rounded"
            required
          />

          <label htmlFor="password" className="font-medium text-gray-400">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Ingresa la contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 ring-2 ring-gray-700 backdrop-blur-md outline-none focus:ring-blue-600 rounded"
            required
          />

          <button
            type="submit"
            className="inline-block p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-100 absolute bottom-6 rounded-xl border-2 border-gray-700 p-6">
        <p>To login, use the following credentials:</p>
        <ul className="list-disc ml-4">
          <li>username: admin</li>
          <li>password: 1234</li>
        </ul>
      </div>
    </div>
  );
}
