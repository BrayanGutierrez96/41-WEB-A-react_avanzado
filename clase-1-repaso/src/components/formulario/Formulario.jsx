import { useEffect } from "react";
import useForm from "../components/useForm/useForm";

function Formulario() {
    const { capturarDatos, usuario, enviarDatos } = useForm();


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>

        <form
          className="flex flex-col"
          onSubmit={(e) => {
            enviarDatos(e);
          }}
        >
          {/* Input fields */}
          <input
            placeholder="First Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="primerNombre"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          <input
            placeholder="Last Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="apellido"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          <input
            placeholder="Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            name="email"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          <input
            placeholder="Confirm Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            name="confirmaEmail"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          <input
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            name="password"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          <input
            placeholder="Confirm Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            name="confirmaPassword"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          {/* Gender selection */}
          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="gender"
            name="genero"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Age input */}
          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="age"
            type="date"
            name="edad"
            onChange={(evento) => {
              capturarDatos(evento);
            }}
          />

          {/* Login link */}
          <p className="text-gray-900 mt-4">
            Already have an account?
            <a className="text-sm text-blue-500 hover:underline ml-1" href="#">
              Login
            </a>
          </p>

          {/* Submit button */}
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <pre>
        {JSON.stringify(usuario, null, 2)}
      </pre>
    </div>
  );
}

export default Formulario;
