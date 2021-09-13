import { motion } from "framer-motion"

export default function ChangePage({direction='right', show = false}){
    return (
        <motion.div
            initial={{
                opacity : 0
            }}
            animate={{
                opacity: show ? 1 : 0
            }}
        >
            <button className='button mr-5'>
                <span class='icon'>
                    <i className={`fa fa-chevron-${direction}`}/>
                </span>
            </button>
        </motion.div>
    )
}