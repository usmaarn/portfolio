

export default function Footer(){
    return(
        <div className="mt-20 py-5 bg-slate-300 text-center capitalize font-semibold tracking-wide">
            <p class='flex items-center gap-2 justify-center'>
                <span>
                    &copy; {new Date().getFullYear()} <a href="/">Dev Usman</a>
                </span>
                <span>|</span> 
                <span>all rights reserved</span>
            </p>
        </div>
    )
}