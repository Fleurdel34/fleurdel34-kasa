import styled from "styled-components"
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc"
import {RxDotFilled } from "react-icons/rx";
import { useState } from "react";


const SlideChevron  = styled.div`
    height:120px;
    width:100%;
    position:absolute;
    display:flex;
    justify-contente:space-between;
    top:60%;    
`
const styleLeft = {height:"120px", width:"100%", weight:"700", color:"white",position:"relative", left:"-15%"}

const styleRight = {height:"120px", width:"100%", weight:"700", color:"white", position:"relative", right:"-15%"}

const SlideImgIconDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
const SlideImgDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center

`

const SlideImg = styled.img`
    width:86%;
    height:415px;
    object-fit:cover;
    

`
const SlideIcon = styled.div`
        display:flex;
        justify-content:center;


`



function Slider(props){

const [currentIndex, setCurrentIndex] = useState(0);

const slide = props.slide;

const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.lenght -1 : currentIndex -1;
    setCurrentIndex(newIndex)
}
const nextSlide = () =>{
    const isLastSlide = currentIndex === slide.lenght -1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex)

}

const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
}

return (
        <div>
            <SlideChevron>
                <VscChevronLeft style ={styleLeft} onclick = {prevSlide}/>
                <VscChevronRight style ={styleRight} onclick= {nextSlide}/>
            </SlideChevron>
            <div>
                {slide.map((slide, slideIndex)=>{
                        return <SlideImgIconDiv  >
                                <SlideImgDiv key = {slideIndex}>
                                    <SlideImg src = {slide} alt =""></SlideImg>
                                </SlideImgDiv>
                                <SlideIcon key = {slideIndex}>
                                    <RxDotFilled onClick={() => goToSlide(slideIndex)}/>
                                </SlideIcon>
                                </SlideImgIconDiv>})}
            </div>
         </div>)

}
export default Slider