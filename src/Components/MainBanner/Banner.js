import './Banner.scss'
import { motion } from 'framer-motion'
import useStore from '../../Store/Store'
import MainText from './Components/MainText'

export default function MainBanner(){
    const showMainBannerClickMe = useStore(state=>state.showMainBannerClickMe)

    const renderClickMe = ()=>{
        if(!showMainBannerClickMe) return

        return (
            <motion.div
                className='ml-6 button is-primary'
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                }}
                onAnimationComplete={()=>console.log('test')}
            >
                Click me
            </motion.div>
        )
    }

    return (
        <section className="hero is-dark is-fullheight">
            <motion.div
                className="hero-body"
                // // animate={{x:0}}
                // // transition={{ duration: 1}}
            >
                <MainText/>
                {renderClickMe()}
            </motion.div>
        </section>
    )
}