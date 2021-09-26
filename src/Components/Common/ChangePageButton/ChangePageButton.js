import { motion } from "framer-motion"

export default function ChangePage({direction='right', show = false, onClick}){
    return (
        <motion.div
            initial={{
                opacity : 0
            }}
            animate={{
                opacity: show ? 1 : 0
            }}
        >
            <button className='button mr-5' onClick={onClick}>
                <span className='icon'>
                    <i className={`fa fa-chevron-${direction}`}/>
                </span>
            </button>
        </motion.div>
    )
}