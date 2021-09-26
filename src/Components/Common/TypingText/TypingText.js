import './TypingText.scss'
import Cursor from './Components/Cursor/Cursor'
import { useEffect, useState } from 'react'

export default function TypingText({text, textClass = '', typingSpeed = 50, children, onFinish = null}){

    const [ displayText, setDisplayText ] = useState('')
    const [ renderChildren, setRenderChildren ] = useState(false)
    const [ blinkingCursor, setBlinkingCursor ] = useState(true)

    useEffect(()=>{
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

                if(onFinish) onFinish()
            }
        }

        typeLetter()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[displayText])

    useEffect(()=>{
        setDisplayText('')
    },[text])

    return (
        <>
            <div className='is-flex'>
                <p className={textClass}>
                    {displayText}{blinkingCursor && <Cursor/>}
                </p>
            </div>
            {renderChildren && children}
        </>
    )
}