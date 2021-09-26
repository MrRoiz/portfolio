import ParallaxLayer from '../Parallax/ParallaxLayer'
import ChangePageButton from '../Common/ChangePageButton/ChangePageButton'

export default function ContainerSlider({children, showButtonLeft, showButtonRight, handleClickChangePage}){
    return (
        <>
            <ParallaxLayer/>
            <div className='is-full-height is-flex is-align-items-center pl-5 is-justify-content-space-between'>
                {showButtonLeft && <ChangePageButton direction='left' show={showButtonLeft} onClick={()=>handleClickChangePage(-1)}/>}

                {children}

                {showButtonRight && <ChangePageButton direction='right' show={showButtonRight} onClick={()=>handleClickChangePage(1)}/>}
            </div>
        </>
    )
}