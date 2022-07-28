

export default function SocialIcon({label, icon, link,}){
    return(
        <a href={link ?? '#'} className="flex items-center gap-3 px-3 py-2 
                rounded border font-medium opacity-70 bg-white">
            <span className="text-3xl">{icon}</span>
            <span className="text-lg tracking-wide">{label}</span>
        </a>
    )
}