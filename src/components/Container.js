import React, {useState, useEffect, useRef} from 'react'
import Header from './Header'
import Textarea from './Textarea'
import TimeLeft from './TimeLeft'
import Wordcount from './Wordcount'

const Container = () => {
    const startingTime = 15

    const [text, setText] = useState("")
    const [timeLeft, setTimeLeft] = useState(startingTime)
    const [isRunning, setIsRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textBoxRef = useRef()

    const handleChange = e => {
        const {value} = e.target

        setText(value)
    }

    const calculateWordCount = text => {
        const words = text.trim().split(" ")
        const filtered = words.filter(word => word !== "")
        return filtered.length
      }
    
    const startCountdown = () => {
        setIsRunning(true)
        setTimeLeft(startingTime)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    
    const stopCountDown = () => {
        setIsRunning(false)
        const totalWords = calculateWordCount(text)
        setWordCount(totalWords)
    }
    
    useEffect(() => {
        if(isRunning && timeLeft > 0) {
            setTimeout(() => {
                setTimeLeft(time => time - 1)
            }, 1000)
        } else if(timeLeft === 0) {
            stopCountDown()
        }
    }, [timeLeft, isRunning])

    return (
        <div className="container">
            <Header />
            <Textarea 
                handleChange={handleChange} 
                textBoxRef={textBoxRef} 
                isRunning={isRunning}
                startCountdown={startCountdown} 
            />
            <TimeLeft timeLeft={timeLeft} />
            <Wordcount wordCount={wordCount} />
        </div>
    )
}

export default Container
