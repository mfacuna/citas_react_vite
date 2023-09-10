const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm(`Deseas eliminar este paciente: ${nombre}`)
    respuesta ? eliminarPaciente(id) : null
  }

  return (
    <div className="bg-white mx-3 mt-2 mb-3 shadow-md px-2 py-2 rounded-md">

      <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-2 px-2">Nombre:</td>
            <td className="py-2 px-2 font-bold">{nombre}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-2 px-2">Propietario:</td>
            <td className="py-2 px-2 font-bold">{propietario}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-2 px-2">Email:</td>
            <td className="py-2 px-2 font-bold">{email}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-2 px-2">Fecha Alta:</td>
            <td className="py-2 px-2 font-bold">{fecha}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-2 px-2">Síntomas:</td>
            <td className="py-2 px-2 font-bold">{sintomas}</td>
          </tr>
        </tbody>
      </table>

      <div
        className="flex mt-3"
      >
        <button
        type="button"
          className="md:mr-2 bg-indigo-500 w-full p-3 border-l-4 border-indigo-700 text-white uppercase text-xs font-bold hover:bg-indigo-800 cursor-pointer transition-shadow"
          onClick={() => {
            setPaciente(paciente)
          }}
        >Editar</button>
        <button
        type="button"
          className="md:ml-2 bg-red-500 w-full p-3 border-l-4 border-red-700 text-white uppercase text-xs font-bold hover:bg-red-800 cursor-pointer transition-shadow"
          onClick={handleEliminar}
        >Eliminar</button>
      </div>


    </div>
  )
}

export default Paciente