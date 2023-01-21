import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administras tus{" "}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>
          {pacientes.map(
            (
              paciente,
              index // Utilizar el index como ID en React es una mala práctica al momento de generar el cálculo cuando se elimina o agrega un elemento empeora el performance
            ) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="font-bold text-indigo-600">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
