import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      // Object Keys te trae un arreglo con las propiedades del objeto, .length te da la sumatoria de las propieades, por lo que si es mayor que cero indica que el objeto no está vacío.
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]); // Cada vez que el paciente cambie se vuelve a renderizar

  const [error, setError] = useState("");

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      return; // No permite que se lea el resto del código.
    } else {
      setError(false);
    }

    // Objeto Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      // Editando un registro
      objetoPaciente.id = paciente.id;

      // objetoPaciente es el paciente actualizado y pacienteState es el que se está editando es decir el viejo.
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      ); // Recorre el array de pacientes y el elemento (paciente) que tenga el mismo id es el que va a retornar, sino trae el paciente no editado

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      // Permite llenar el arreglo de Pacientes.
      setPacientes([
        ...pacientes, // se usa el spread para traer copia del state pacientes.
        objetoPaciente,
      ]);
    }

    // Paraa vaciar los campos del formulario.
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          {/* Block le da todo el tamaño disponible */}
          {/* El FOR en un LABEL permite que al hacer click en el label me lleve al input directamente */}
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Ingrese Email del Propietario"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas "
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>

          <textarea
            name=""
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
