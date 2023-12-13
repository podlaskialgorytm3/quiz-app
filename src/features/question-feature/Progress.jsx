import { useState, useEffect } from "react"

export const Progress = ({max}) => {
    const [timeLeft,setTimeLeft] = useState(max)
    useEffect(() => {
        const counterTime =  setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 10 : 0))
        },10)

        return () => clearInterval(counterTime)
    },[])

    return(
        <progress
        max={max}
        value={timeLeft}
        className="mt-10 mb-5 w-[700px]" 
         />
    )
}