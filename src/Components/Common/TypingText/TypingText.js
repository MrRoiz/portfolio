import './TypingText.scss'
import { useEffect, useState } from 'react'

export default function TypingText({text, textClass = '', typingSpeed = 50, children}){

    const [ displayText, setDisplayText ] = useState('')
    const [ renderChildren, setRenderChildren ] = useState(false)
    const [ blinkingCursor, setBlinkingCursor ] = useState(true)

    useEffect(()=>{
        typeLetter()
    },[displayText])

    const typeLetter = async () => {
        await new Promise(resolve=>{
            setTimeout(resolve,typingSpeed)
        })

        if(text.length > displayText.length){
            setDisplayText(displayText+text[displayText.length])
        }else{
            if(children){
                setRenderChildren(true)
                setBlinkingCursor(false)
            }
        }
    }

    return (
        <>
            <div className='is-flex'>
                <p className={`${textClass} ${blinkingCursor && 'blinking-cursor'}`}>
                    {displayText}
                </p>
            </div>
            {renderChildren && children}
        </>
    )
}