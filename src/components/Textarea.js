import React from 'react'

const Textarea = ({handleChange, startCountdown, isRunning, text, textBoxRef}) => {
    return (
        <div>
            <textarea 
                placeholder="Start typing..."
                value={text}
                onChange={handleChange}
                disabled={!isRunning}
                ref={textBoxRef}
            />
            <button 
                onClick={startCountdown} 
                disabled={isRunning}
                >Start</button>
        </div>
    )
}

export default Textarea
