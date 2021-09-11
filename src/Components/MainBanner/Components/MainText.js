import TypingText from "../../Common/TypingText/TypingText";
import useStore from '../../../Store/Store'

export default function MainText(){
    const toggleShowMainBannerClickMe = useStore(state => state.toggleShowMainBannerClickMe)

    return (
        <div className='is-flex is-flex-direction-column'>
            <TypingText text='Hey! my name is Oscar Ruiz' textClass='title'>
                <TypingText text='I´m a fullstack developer.' onFinish={toggleShowMainBannerClickMe} textClass='subtitle'/>
            </TypingText>
        </div>
    )
}