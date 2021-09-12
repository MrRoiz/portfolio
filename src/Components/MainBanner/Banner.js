import './Banner.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import useStore from '../../Store/Store'
import ClickMe from './Components/ClickMe'
import MainText from './Components/MainText'

export default function MainBanner(){
    const showMainBannerClickMe = useStore(({showMainBannerClickMe}) => showMainBannerClickMe)

    const [animationFirstText, setAnimationFirstText ] = useState({
        animate : {},
        transition : {}
    })

    const startMainAnimation = ()=>{
        // setAnimationFirstText({
        //     animate : {
        //         pathLength : 1
        //     },
        //     transition : {
        //         duration : 2,
        //         type : 'tween'
        //     }
        // })
        setAnimationFirstText({
            initial:{ scale: 0 },
            animate:{ rotate: 360, scale: 1 },
            transition:{
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        })
    }

    return (
        <section className="hero is-dark is-fullheight">
            <div className="hero-body">
                <motion.div
                    className='is-flex is-flex-direction-row is-align-items-center'
                    {...animationFirstText}
                >
                    <MainText/>
                    {showMainBannerClickMe && <ClickMe handleClick={startMainAnimation}/>}
                </motion.div>
            </div>
        </section>
    )
}