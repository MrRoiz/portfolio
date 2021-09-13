import { useState } from 'react'
import ParallaxLayer from './Components/Parallax/ParallaxLayer'
import TypingText from './Components/Common/TypingText/TypingText'
import ChangePageButton from './Components/Common/ChangePageButton/ChangePageButton'

export default function App(){

    const [ showButtonsTogglePage, setShowButtonsTogglePage ] = useState(false)

    return (
        <>
            <ParallaxLayer/>
            <div className='is-full-height is-flex is-align-items-center pl-5 is-justify-content-space-between'>

                <div className='is-flex is-flex-direction-column'>
                    <TypingText text='Hey, my name is Oscar Ruiz' textClass='title has-text-white'>
                        <TypingText text="I'm a fullstack Software Developer." onFinish={()=>setShowButtonsTogglePage(true)} textClass='subtitle has-text-white'/>
                    </TypingText>
                </div>

                <ChangePageButton direction='right' show={showButtonsTogglePage}/>
            </div>
        </>
    )
}