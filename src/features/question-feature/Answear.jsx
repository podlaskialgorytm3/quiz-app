export const Answear = ({children, correct, ...props}) => {
    const isCorrect = JSON.parse(correct);
    console.log(isCorrect)
    return (
        <div className="w-[700px] h-16 mt-6 bg-gray-700
                        text-center leading-[64px] rounded-3xl" 
         {...props}>
            {children}
        </div>
    )
}