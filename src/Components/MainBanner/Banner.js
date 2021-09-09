import './Banner.scss'
import MainText from './Components/MainText'

export default function MainBanner(){
    return (
        <section className="hero is-dark is-fullheight">
            <div className="hero-body custom-body-hero">
                <MainText/>
            </div>
        </section>
    )
}