import React, { useRef,useEffect, useState } from 'react'
import styled from 'styled-components'
import {device} from './breakpoint'
import {themes} from '../theme'

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
function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('userTheme') ? localStorage.getItem('userTheme') : 'neon')
    
    const switchTheme = (currentTheme) => {
        if (currentTheme === 'red'){
            document.documentElement.style.setProperty('--primary-bg', themes.red.bg)
            document.documentElement.style.setProperty('--primary-font', themes.red.font)
            document.documentElement.style.setProperty('--primary-base', themes.red.base)
        } 
        if (currentTheme === 'neon'){
            document.documentElement.style.setProperty('--primary-bg', themes.neon.bg)
            document.documentElement.style.setProperty('--primary-font', themes.neon.font)
            document.documentElement.style.setProperty('--primary-base', themes.neon.base)
        }
        if (currentTheme === 'green'){
            document.documentElement.style.setProperty('--primary-bg', themes.green.bg)
            document.documentElement.style.setProperty('--primary-font', themes.green.font)
            document.documentElement.style.setProperty('--primary-base', themes.green.base)
           
        }
        if (currentTheme === 'purple'){
            document.documentElement.style.setProperty('--primary-bg', themes.purple.bg)
            document.documentElement.style.setProperty('--primary-font', themes.purple.font)
            document.documentElement.style.setProperty('--primary-base', themes.purple.base)
        }
        localStorage.setItem('userTheme', currentTheme)
    }

    // const classSwitch = (theme) => {
    //     console.log(buttons.current)
    //     const buttonElements = Array.from(buttons.current.children)
    //         buttonElements.forEach(buttonElement =>{
    //             buttonElement.classList.remove('active');
    //             const activeSwitcher = (theme) =>{
    //                 if(theme === buttonElement.id){
    //                     buttonElement.classList.add('active');
    //                 }
    //              }
    //              activeSwitcher(theme)
    //         })
    // }
    const buttons = useRef()
    useEffect(()=>{
        
        const buttonElements = Array.from(buttons.current.children)
        buttonElements.forEach(buttonElement =>{
            buttonElement.classList.remove('active');
            const activeSwitcher = (currentTheme) =>{
                if(currentTheme === buttonElement.id){
                    buttonElement.classList.add('active');
                }
            }
            activeSwitcher(currentTheme)
            switchTheme(currentTheme)
        })
    },[currentTheme])
    // if(localStorage.length > 0){
    //     const seletedTheme = localStorage.getItem('userTheme')
    //     switchTheme(seletedTheme)
    // }
    return (
        <ThemeWrapper ref={buttons}>
            <RedButton id='red' onClick={() => {setCurrentTheme('red')}}> </RedButton>
            <NeonButton id='neon' onClick={() => {setCurrentTheme('neon')}} className='active'></NeonButton>
            <GreenButton id='green' onClick={() =>{setCurrentTheme('green')}}></GreenButton>
            <PurpleButton id='purple' onClick={()=>{setCurrentTheme('purple')}}></PurpleButton>
        </ThemeWrapper>
    )
}

export default ThemeSwitcher