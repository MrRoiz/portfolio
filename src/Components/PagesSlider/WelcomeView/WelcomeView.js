import TypingText from '../../Common/TypingText/TypingText'

export default function WelcomeView({ onFinish }){
    return (
        <div className='is-flex is-flex-direction-column'>
            <TypingText text='Hey, my name is Oscar Ruiz' textClass='title has-text-white'>
                <TypingText text="I'm a fullstack Software Developer." onFinish={()=>onFinish(true)} textClass='subtitle has-text-white'/>
            </TypingText>
        </div>
    )
}