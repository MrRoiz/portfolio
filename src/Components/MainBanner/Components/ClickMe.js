import { motion } from 'framer-motion'

export default function ClickMe({ handleClick }){
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
            // onAnimationComplete={()=>console.log('test')}
            onClick={handleClick}
        >
            Click me
        </motion.div>
    )
}