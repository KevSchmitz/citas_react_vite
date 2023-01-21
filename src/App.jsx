import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header.jsx";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS); // Se crea el estado de pacientes para ser utilizado en otros componentes, se llena desde formulario y se pasa a listado de pacientes.
  const [paciente, setPaciente] = useState({}); // Este es el paciente que es seleccionado con el botón editar.

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []; // Se parsea ya que el en LS se almacena como string y hay que pasarlo a Array, los '??' si no hay nada en LS entonces agregale un array vacío para que no aparezca null.
  //     setPacientes(pacientesLS);

  //     console.log("Obteniendo desde LS", pacientesLS);
  //   };

  //   obtenerLS();
  // }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // El array hay que pasarlo a string porque esa es la manera en que se guaardan los valores en LS
    console.log("Guardando en storage");
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex gap-3">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
