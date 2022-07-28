

export default function Wrapper({children, title, id}){
    return(
        <div className="px-5 md:px-20 pt-20" id={id}>
            <h1 className="text-lg font-medium md:text-xl text-gray-500 uppercase tracking-widest mb-5">{title}</h1>
            <div className="">
                {children}
            </div>
        </div>
    )
}