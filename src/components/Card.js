import { useEffect, useState } from "react"
import "./Card.css"

const Card = ({name, image,id, type1, type2, onClick}) =>{
    let [color, setColor] = useState("")
    let [backColor, setBackColor] = useState("")
    let [color2, setColor2] = useState("")
    let [fontColor, setfontColor] = useState("")



    useEffect(()=>{
        
        const verifyColor = () =>{
            
            switch (type1) {
                case "flying": setColor("rgb(112, 172, 207)")
                break
                case "grass": setColor("rgb(111, 204, 102)");    
                    setBackColor("rgb(41, 240, 124)")
                    break;
                case "fire": setColor("orange")
                    setBackColor(" rgb(245, 144, 86)")
                    break
                case "water": setColor("rgb(50, 139, 255)")
                    setBackColor(" rgb(41, 217, 240)")
                    break
                case "bug": setColor("chartreuse")
                    setBackColor("#3da723")
                    break
                case "normal": setColor("white")
                    setfontColor("black") 
                    setBackColor("rgb(221, 220, 217)")
                break
                case "poison": setColor("purple")
                    setBackColor("rgb(230, 86, 230)")
                    break
                case "electric": setColor("yellow")
                    setBackColor(" rgb(255, 230, 88)")
                    setfontColor("gray")
                    break
                case "ground":
                    setBackColor("rgb(204, 155, 63)")
                    setColor("rgb(160, 114, 29)")
                    break
                case "fairy":
                    setColor("rgb(255, 97, 202) ")
                    setBackColor("rgb(238, 157, 211) ")
                    break
                case "fighting":
                    setColor("rgb(245, 97, 97)")
                    setBackColor("rgb(214, 74, 74)")
                    break
                case "ghost":
                    setBackColor("rgb(177, 65, 187)")
                    setColor("rgb(137, 49, 145) ")
                    break
                case "psychic":
                    setBackColor("rgb(245, 94, 195)")
                    setColor("rgb(202, 75, 160)")
                    break
                case "rock":
                    setBackColor("rgb(141, 110, 69)")
                        setColor("rgb(116, 90, 57)")
                        break
                case "ice":
                    setBackColor("#53b7e9")
                    setColor("#5bc8ff")
                    break
                case "dragon":
                    setBackColor("#7766EE")
                    setColor("#6766d4")
                default:
                    break;
            }
        }
        verifyColor()
    }, [type1] )

    useEffect(()=>{
        const verifyColor = () =>{
            switch (type2) {
                case "flying": setColor2("rgb(112, 172, 207)")
                break
                case "grass": setColor2("green");    
                    break;
                case "fire": setColor2("orange")
                    break
                case "water": setColor2("rgb(50, 139, 255)")
                    break
                case "bug": setColor2("chartreuse")
                    break
                case "normal": setColor2("white")
                    setfontColor("black") 
                break
                case "poison": setColor2("purple")
                    break
                case "electric": setColor2("yellow")
                    setfontColor("gray")
                    break
                case "ground":
                    setColor2("rgb(160, 114, 29)")
                    break
                case "fairy":
                    setColor2("rgb(255, 97, 202) ")
                    break
                case "fighting":
                    setColor2("rgb(245, 97, 97)")
                    break
                case "ghost":
                    setColor2("rgb(137, 49, 145) ")
                    break
                case "psychic":
                    setColor2("rgb(202, 75, 160)")
                    break
                case "rock":
                        setColor2("rgb(116, 90, 57)")
                        break
                default:
                    break;
            }
        }
        verifyColor()
    }, [type2] )
  
    return(
        
        <div style={{backgroundColor:backColor}} onClick={onClick} className="containerCard">
            <img src={image} ></img>
            <label>#{id} </label>
            <text> {name}</text>
            <div className="TypeContainer">
                <p style={{backgroundColor:color, color:fontColor}}> {type1} </p>
                 <p style={{backgroundColor:color2}}> {type2} </p>
            </div>
          
           
        </div>
      
        
    )
}
export default Card