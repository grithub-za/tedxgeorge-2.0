

export default function Checkmark({ fill="#27ae60", className="" }){
    return(
        <svg id="icon-checkmark" className={className} viewBox="0 0 32 32" width={24} height={24} fill={fill}>
            <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
        </svg>
    )
}