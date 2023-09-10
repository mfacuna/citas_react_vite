import Paciente from './Paciente'
import {useEffect} from 'react'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    useEffect(() => {
        if(pacientes.length > 0){
            console.log(`Se ha agregado un nuevo paciente!`)
        }
    }, [pacientes])
    

    return (
        <div className="md:w-1/2 lg:w-3/5 mb-5">
            {pacientes && pacientes.length ? (
                <>
                    <div className="pb-2 p-3 rounded-md text-start">
                        <h2 className="font-black text-md">Listado Pacientes</h2>
                        <p className="text-md mt-2">
                            Administra tus Pacientes y {''}
                            <span className="text-indigo-600 font-bold">Citas</span>
                        </p>
                    </div>
                    <div className="max-h-screen overflow-y-scroll rounded-md">
                        {
                            pacientes.map(paciente => (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />
                            ))
                        }
                    </div>
                </>
            ) : (
                <div className="pb-2 p-3 rounded-md text-start">
                    <h2 className="font-black text-md">No hay pacientes</h2>
                    <p className="text-md mt-2 mb-2">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default ListadoPacientes