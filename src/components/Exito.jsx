const Exito = ({ mensaje, setOk }) => {


    return (

        <div className="flex justify-between bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="dialog">
                <p className="font-bold text-xs">{mensaje}</p>
                <button 
                    type="button" 
                    className="bg-white rounded-md p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => {
                        setOk(false)
                    }}
                    >

                    <span className="sr-only">Close menu</span>
                    <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
        </div>



    )
}

export default Exito