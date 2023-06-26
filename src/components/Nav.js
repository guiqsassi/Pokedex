
import { useState } from 'react'
import './Nav.css'
import {FaBars} from "react-icons/fa"
import icon from "../images/pokeball-16809.png"
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
function Nav() {

    const [flex, setFlex] = useState('flex')
    const [nav, setNav] = useState(true)
    const [transform, setTransform] = useState('Slide 2s linear')
    const [inputBoolean, setInputBoolean] = useState(true)
    const [input, setInput] = useState('none')
    function check () {

            if(!nav){

                setNav(true)
                setFlex('flex')
                console.log(flex)
        }
        else{

            setNav(false)
            setFlex('none')
            console.log(flex)
        }
        
    }
    function ToggleInput(){
       
            console.log("a")
       
       
    }

    return(
        <div className="containerNav">

           <img src={icon}/>
    

        </div>
    );
}

export default Nav