export const MainContainer = ({children}) => {

    return(
        <div className="flex flex-col justify-center items-center 
                        w-[1000px] h-[600px] shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] 
                        rounded-[40px]
                        bg-mainColor
                        ">
            {children}
        </div>
    )
}