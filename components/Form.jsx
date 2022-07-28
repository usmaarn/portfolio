

export function Input({label, placeholder, onChange, type}){
    return(
         <div className="pb-2">
            {/* <label className="mb-1">{label ?? 'Input'}</label> */}
            <input type={type ?? 'text'} placeholder={placeholder ?? ''}
                className="w-full px-5 py-3 rounded border"
                onChange={onChange} 
            />
        </div>
    )
}

export function Textarea({onChange, label, className, placeholder}){
    return(
        <div className="pb-2">
            {/* <label className="mb-1">{label ?? 'Input'}</label> */}
            <textarea placeholder={placeholder ?? ''}
                className={`w-full px-5 py-3 rounded border ${className}`}
                onChange={onChange}
            />
        </div>
    )
}

export function Button({text, className, icon}){
    return(
        <button className={`px-5 py-2 md:py-3 rounded shadow-lg shadow-sky-200 bg-sky-400/80 
                text-gray-700 ${className}`}>
            {text ?? 'Button'}
        </button>
    )
}