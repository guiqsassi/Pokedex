import axios from "axios"
import { useState, useContext, useEffect } from "react"
import Pokemon from "../../context/context"
import "./PokemonInfo.css"
import { GiWeight } from "react-icons/gi";
import { BiSolidRuler } from "react-icons/bi";

function PokemonInfo () {
    const{pokemon, setPokemon} = useContext(Pokemon)
    const[type1, setType1] = useState("")
    // const[pokemon, setPokemon] = useState()
        let [color, setColor] = useState("")
        let [backColor, setBackColor] = useState("")
        let [color2, setColor2] = useState("")
        let [fontColor, setfontColor] = useState("")

         let [hpWidth, setHpWidth] = useState(pokemon.stats[0].base_stat/2)
         let [attackWidth, setAttackWidth] = useState(pokemon.stats[1].base_stat/2)
         let [defenseWidth, setDefenseWidth] = useState(pokemon.stats[2].base_stat/2)
         let [spaWidth, setSpaWidth] = useState(pokemon.stats[3].base_stat/2)
         let [spdWidth, setSpdWidth] = useState(pokemon.stats[4].base_stat/2)
         let [speedWidth, setSpeedWidth] = useState(pokemon.stats[5].base_stat/2)

        useEffect(()=>{
            // let response =  axios.get(`https://pokeapi.co/api/v2/pokemon/${4}`).then((res) =>{setPokemon(res.data)})
            console.log(pokemon)
          

        
        },[pokemon])
        
    
    
        useEffect(()=>{
        
            const verifyColor = () =>{
                
                switch (pokemon.types[0].type.name) {
                    case "flying": setColor("rgb(112, 172, 207)")
                    break
                    case "grass": setColor("rgb(111, 204, 102)");    
                        setBackColor("#5EB357")
                        break;
                    case "fire": setColor("orange")
                        setBackColor(" rgb(245, 144, 86)")
                        break
                    case "water": setColor("rgb(50, 139, 255)")
                        setBackColor(" rgb(41, 217, 240)")
                        break
                    case "bug": setColor("#3da723")
                        setBackColor("#3da723")
                        break
                    case "normal": setColor("white")
                        setfontColor("black") 
                        setBackColor("#a3a3a3")
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
                    case "flying":
                        setBackColor("#5a899e")
                        
                        break
                    case "ice":
                        setBackColor("#53b7e9")
                        setColor("#5bc8ff")
                        break
                    case "dragon":
                    setBackColor("#7766EE")
                    setColor("#6766d4")
                    break
                    default:
                        break;
                }
            }
            verifyColor()
        }, [pokemon] )
           

        useEffect(()=>{

            const verifyColor = () =>{
                if(pokemon.types[1]){
                    switch (pokemon.types[1].type.name) {
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
              
            }
            verifyColor()
        }, [pokemon] )
      

    return(
    <div className="Background" >
        <div className="Container"> 
        {pokemon?
        <>
        <div className="left">
        <h1> {pokemon.name} </h1>
        <img src={pokemon.sprites.front_default} className="imgPokemon"/>
        {/* <button onClick={()=>{console.log(pokemon)}}> </button> */}
        <div className="TypeContainerInfo">
                <p className="typeSelector" style={{backgroundColor:color, color:fontColor}}> { pokemon.types[0].type.name} </p>
                {pokemon.types[1]?
                <>
                <p className="typeSelector" style={{backgroundColor:color2}}> {pokemon.types[1].type.name} </p>
                </>
                
                :null}
                 
            </div>
        </div>
        <div style={{backgroundColor:backColor}} className="right">
            
            <div className="informations">
                 <h1> informations </h1>
                <div className="infoFlexDirection"> 
                <div className="infoLeft">
                    <h2> Weight: </h2>
                    <h3> {pokemon.weight} Kg </h3>
                    
                    <h2>Height: </h2>
                    <h3> {pokemon.height/10} m</h3>
                </div>
                
                <div className="infoRight">
                    
                <h2>Abilitie #1: </h2>
                    <h3> {pokemon.abilities[0].ability.name}</h3>
                    {pokemon.abilities[1]?  
                    <>
                      <h2>Abilitie #2: </h2>
                      <h3> {pokemon.abilities[1].ability.name}</h3> 
                    </>
                :null}
                  
                </div>
                </div>
               
            </div>
            <div className="status"> 
                <h1> Status </h1>
                <li>  
                <h3> Hp: {pokemon.stats[0].base_stat} </h3> <p> 01 </p> <span className="Bar">  <span className="Hp" style={{maxWidth:`${hpWidth.toString()}%`}}> </span> </span> <p> 200 </p>  
                </li>
                <hr></hr>
                <li>  
                  <h3> Attack: {pokemon.stats[1].base_stat}  </h3> <p> 01 </p> <span className="Bar" > <span className="Attack" style={{maxWidth:`${attackWidth.toString()}%`}}> </span> </span> <p> 200 </p>
                </li>
                <hr></hr>
                <li>  
                 <h3> Defense: {pokemon.stats[2].base_stat}  </h3>  <p> 01 </p> <span className="Bar"> <span className="Defense" style={{maxWidth:`${defenseWidth.toString()}%`}}> </span> </span> <p> 200 </p>
                </li>
                <hr></hr>
                <li>  
                 <h3> Sp-Attack: {pokemon.stats[3].base_stat}  </h3>  <p> 01 </p> <span className="Bar"> <span className="Defense" style={{maxWidth:`${spaWidth.toString()}%`}}> </span> </span> <p> 200 </p>
                </li>
                <hr></hr>
                <li>  
                 <h3> Sp-Defense: {pokemon.stats[4].base_stat}  </h3>  <p> 01 </p> <span className="Bar"> <span className="Defense" style={{maxWidth:`${spdWidth.toString()}%`}}> </span> </span> <p> 200 </p>
                </li>
                <hr></hr>
                <li>  
                 <h3> Speed: {pokemon.stats[5].base_stat}  </h3>  <p> 01 </p> <span className="Bar"> <span className="Defense"style={{maxWidth:`${speedWidth.toString()}%`}}> </span> </span> <p> 200 </p>
                </li>
                <hr></hr>
            </div>
        </div>
        </>
           :null}   
    </div>
    </div>

        )
}
export default PokemonInfo