import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Error from './Error'
import Exito from './Exito'

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)
    const [ok, setOk] = useState(false)

    useEffect( () => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
        
    },[paciente])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            setOk(false)
            return
        }
        setError(false)
        setOk(true)

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id){
            //Editanto el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados);
            setPaciente({})


        }else{
            //Nuevo registro
            objetoPaciente.id = uuidv4()
            setPacientes([...pacientes, objetoPaciente])

        }

        //Reiniciar formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2  lg:w-2/5 mx-5">

            <div className="pb-2 p-3 rounded-md">
                <h2 className="font-black text-md">Seguimiento Pacientes</h2>

                <p className="text-md mt-2 mb-2">
                    Añade Pacientes y {''}
                    <span className="text-indigo-600 font-bold">Administralos</span>
                </p>
            </div>



            <div>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg py-5 px-5 h-full">

                    <div className="mb-5">
                        <label htmlFor="mascota" className="block text-xs text-gray-700 uppercase font-bold">Nombre Mascota</label>
                        <input
                            id="mascota"
                            type="text"
                            placeholder="Nombre de la Mascota"
                            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                    </div>
                    <div className="mb-5">
                        <label htmlFor="propietario" className="block text-xs text-gray-700 uppercase font-bold">
                            Nombre Propietario
                        </label>
                        <input
                            id="propietario"
                            type="text"
                            placeholder="Nombre del Propietario"
                            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)}
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-xs text-gray-700 uppercase font-bold">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Contacto Propietario"
                            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="alta" className="block text-xs text-gray-700 uppercase font-bold">
                            Alta
                        </label>
                        <input
                            id="alta"
                            type="date"
                            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="sintomas" className="text-xs block text-gray-700 uppercase font-bold">
                            Síntomas
                        </label>
                        <textarea
                            id="sintomas"
                            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Describe los Síntomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}
                        />
                    </div>

                    {error && <Error>Todos los campos son obligatorios</Error>}
                    {ok && < Exito
                        mensaje="Los datos del paciente han sido ingresados correctamente"
                        setOk={setOk}
                    />}

                    <input
                        type="submit"
                        className="bg-indigo-500 w-full p-3 border-l-4 border-indigo-700 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-shadow"
                        value={ paciente.id ? `Editar Paciente` : `Agregar Paciente`}
                    />
                </form>
            </div>


        </div>

    )
}

export default Formulario