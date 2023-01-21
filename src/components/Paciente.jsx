import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;
  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar a este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="bg-white px-5 py-10 shadow rounded-xl mb-3">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-evenly">
        <input
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase text-white rounded-lg font-bold"
          type="button"
          value="Editar"
          onClick={() => setPaciente(paciente)}
        />
        <input
          className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase text-white rounded-lg font-bold"
          type="button"
          value="Eliminar"
          onClick={handleEliminar}
        />
      </div>
    </div>
  );
};

export default Paciente;
