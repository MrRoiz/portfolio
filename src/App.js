import { useState } from 'react'
import ContainerSlider from './Components/ContainerSlider/ContainerSlider'
import WelcomeView from './Components/PagesSlider/WelcomeView/WelcomeView'
import InformationView from './Components/PagesSlider/InformationView/InformationView'

export default function App(){

    const [ showButtonRight, setShowButtonRight ] = useState(false)
    const [ showButtonLeft, setShowButtonLeft ] = useState(false)
    const [ showButtonsTogglePage, setShowButtonsTogglePage ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(0)

    const handleClickChangePage = (direction)=>{
        setCurrentPage(currentPage+direction)
        // setShowButtonsTogglePage(false)
    }

    const renderSliderPage = ()=>{
        let page = null

        switch(currentPage){
            case 0:
                if(showButtonLeft) setShowButtonLeft(false)
                if(!showButtonRight) setShowButtonRight(true)
                page = <WelcomeView onFinish={()=>setShowButtonsTogglePage(true)}/>
            break
            case 1:
                if(!showButtonRight) setShowButtonRight(true)
                if(!showButtonLeft) setShowButtonLeft(true)

                page = <InformationView/>
            break
            case 2:
                if(showButtonRight) setShowButtonRight(false)
                if(!showButtonLeft) setShowButtonLeft(true)

                page = <h1>get in touch</h1>
            break
            default:
                setCurrentPage(0)
        }

        return page
    }

    return (
        <ContainerSlider 
            showButtonLeft={showButtonLeft && showButtonsTogglePage}
            showButtonRight={showButtonRight && showButtonsTogglePage}
            handleClickChangePage={(direction)=>handleClickChangePage(direction)}
        >
            {renderSliderPage()}
        </ContainerSlider>
    )
}