export const Button = ({children, ...props}) => {

    return(
        <button
        {...props}
        className="mt-20 w-52 h-16 bg-amber-500 text-xl rounded-3xl duration-700 hover:shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)]"
        >
        {children}
        </button>
    )
}