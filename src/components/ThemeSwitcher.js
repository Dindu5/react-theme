import React, { useRef } from 'react'
import styled from 'styled-components'
import {device} from './breakpoint'

const ThemeWrapper = styled.div `
position: absolute;
right: 2rem;
top: 5.5rem;
@media ${device.mobileL} {
    right: 0.5rem;
    top: 0;
}
`
const Button = styled.button`
margin: .8rem;
padding: 1rem;
opacity : .2;
display: block;
border: none;
cursor: pointer;
border-radius: 5px;
transition: all .6s;

&:hover,&.active {
    outline: none;
    opacity:1;
}
`
const RedButton = styled(Button)`
background-color : #e84060;
`
const NeonButton = styled(Button)`
background-color : #b8e0f8;
`
const GreenButton = styled(Button)`
background-color :#d8e8f0;
`
const PurpleButton = styled(Button)`
background-color :#14ffec;
`
const switchTheme = (color) => {
    if (color === 'red'){
        document.documentElement.style.setProperty('--primary-bg', '#102038')
        document.documentElement.style.setProperty('--primary-font', '#e84060')
        document.documentElement.style.setProperty('--primary-base', '#181828')
    } 
    else if (color === 'neon'){
        document.documentElement.style.setProperty('--primary-bg', '#3080b8')
        document.documentElement.style.setProperty('--primary-font', '#b8e0f8')
        document.documentElement.style.setProperty('--primary-base', '#084870')
    }
    else if (color === 'green'){
        document.documentElement.style.setProperty('--primary-bg', '#283048"')
        document.documentElement.style.setProperty('--primary-font', '#d8e8f0')
        document.documentElement.style.setProperty('--primary-base', '#008088')
    }
    else if (color === 'purple'){
        document.documentElement.style.setProperty('--primary-bg', '#323232')
        document.documentElement.style.setProperty('--primary-font', '#14ffec')
        document.documentElement.style.setProperty('--primary-base', '#212121')
    }
}
function ThemeSwitcher() {
    const buttons = useRef()
    const classSwitch = (e) =>{
        const buttonElements = Array.from(buttons.current.children)
        buttonElements.forEach(buttonElement => {
            if (e.target === buttonElement){
                buttonElements.forEach(element => element.classList.remove('active'))
                e.target.classList.add('active')
            }
        })
    }
    
    return (
        <ThemeWrapper ref={buttons} onClick={(e)=> {classSwitch(e)}}>
            <RedButton onClick={() => {switchTheme('red')}}> </RedButton>
            <NeonButton onClick={() => {switchTheme('neon')}} className='active'></NeonButton>
            <GreenButton onClick={() =>{switchTheme('green')}}></GreenButton>
            <PurpleButton onClick={()=>{switchTheme('purple')}}></PurpleButton> 
        </ThemeWrapper>
    )
}

export default ThemeSwitcher
