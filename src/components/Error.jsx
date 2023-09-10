const Error = ({children}) => {
    return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold text-xs">{children}</p>
        </div>
    )
}

export default Error