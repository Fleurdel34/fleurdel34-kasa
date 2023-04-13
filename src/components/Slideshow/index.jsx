/*import styled from "styled-components"*/
import { VsChevronLeft, VsChevronRight } from "react-icons/bs"
import {RxDotFilled } from "react-icons/rx"
import { useState } from "react-icons/bs"

function Slider(props){

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.src.lenght -1 : currentIndex -1;
    setCurrentIndex(newIndex)
}
const nextSlide = () =>{
    const isLastSlide = currentIndex === props.src.lenght -1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex)

}

const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
}

return (
        <div>
            <div>
                <VsChevronLeft onclick = {prevSlide}/>
            </div>
            <div>
                <VsChevronRight onclick= {nextSlide}/>
            </div>
            <div>
                {props.src.map((slide, slideIndex)=>{
                        <div key = {slideIndex} onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled />
                        </div>})}
            </div>
         </div>)

}
export default Slider