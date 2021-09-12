import './Banner.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import useStore from '../../Store/Store'
import ClickMe from './Components/ClickMe'
import MainText from './Components/MainText'

export default function MainBanner(){
    const showMainBannerClickMe = useStore(({showMainBannerClickMe}) => showMainBannerClickMe)
    const [ showFirstText, setShowFirstText ] = useState(true)

    const [animationFirstText, setAnimationFirstText ] = useState({
        animate : {},
        transition : {}
    })

    const startMainAnimation = ()=>{
        setAnimationFirstText({
            animate : {
                x : 2000
            },
            transition : {
                duration : .5
            }
        })
    }

    return (
        <section className="hero is-dark is-fullheight">
            <div className="hero-body">
                {showFirstText && 
                    <motion.div
                        className='is-flex is-flex-direction-row is-align-items-center'
                        {...animationFirstText}
                        onAnimationComplete={()=>setShowFirstText(false)}
                    >
                        <MainText/>
                        {showMainBannerClickMe && <ClickMe handleClick={startMainAnimation}/>}
                    </motion.div>
                }
            </div>
        </section>
    )
}