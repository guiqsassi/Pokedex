import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import "./Home.css"
import Nav from "../../components/Nav";
import Pokemon from "../../context/context";
import { BiArrowToLeft } from "react-icons/bi"


const Home = () =>{

    const {pokemon, setPokemon} = useContext(Pokemon)
    const navigate = useNavigate()

    const [nameInput, setNameInput] = useState()
    const [error, setError] = useState("none")
    const [pokedex, setPokedex] = useState([{}]);
    const [showPokedex, setShowPokedex] = useState([{}])

    const Search = () =>{
      let nameArray = []
      let nameId = document.getElementById("nameId").value
      
      
        for(let i = 0; i< pokedex.length; i++){
          
          nameArray.push(pokedex[i].data.name)
        }

        // setName(nameId.toLowerCase())
        setNameInput(nameId.toLowerCase())
        setError("none")
        if(nameId){
             if(nameArray.includes(nameId.toLowerCase())){
          setError("none");
          console.log("AAA")
        }
        else{
          setError("flex")
          
        }
        }
     
   

      // navigate('/pokemonInfo')
    }

    useEffect(() => {
             let endpoints = []
      const pokeGet = ( ) =>{
        for(let i =1; i<152; i++){
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)

        }
  let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokedex(res)) 
          return response
          
        }
        pokeGet()
      }, []);
      

    return(
      <div className="container"> 
      <Nav></Nav>
        <div className="main">
        <div className="searchArea">
          <h1 > Pesquise por Nome ou Id: </h1> 
          <div className="input"> 
           <input id="nameId"/>
          <BiArrowToLeft size={30} onClick={()=>{Search()}} color="green" style={{cursor: "pointer"}}></BiArrowToLeft>
          </div>
         
        </div>
        <div className="pokedex">
        <h1 style={{display:error, color:"gray"}} className="error"> Pokemon not find </h1>

        {nameInput? showPokedex.map((pokedex) => {
 
            
        }): null} 

        {pokedex[1]? pokedex.map((pokedex) => {
          if(nameInput){
            if(pokedex.data.name == nameInput){
              if(pokedex.data.types[1]){
                return(
                   <Card name={pokedex.data.name} onClick={() => { setPokemon(pokedex.data, navigate('/PokemonInfo') )}} image={pokedex.data.sprites.front_default} id={pokedex.data.id} type1={pokedex.data.types[0].type.name} type2={pokedex.data.types[1].type.name}> </Card>
                )
              }
              else{
                return(
                  <Card name={pokedex.data.name} onClick={() => { setPokemon(pokedex.data, navigate('/PokemonInfo') )}} image={pokedex.data.sprites.front_default} id={pokedex.data.id} type1={pokedex.data.types[0].type.name}> </Card>
               )
              }
            }
            
          }
          else{
            
            if(pokedex.data.types[1]){
              return(
                 <Card name={pokedex.data.name}  onClick={() => { setPokemon(pokedex.data, navigate('/PokemonInfo') )}} image={pokedex.data.sprites.front_default} id={pokedex.data.id} type1={pokedex.data.types[0].type.name} type2={pokedex.data.types[1].type.name}> </Card>
              )
            }
            else{
              return(
                <Card name={pokedex.data.name} onClick={() => { setPokemon(pokedex.data, navigate('/PokemonInfo') )}} image={pokedex.data.sprites.front_default} id={pokedex.data.id} type1={pokedex.data.types[0].type.name}> </Card>
             )
            }
          }
        
            
        }): null} 
        
        </div>
        
        
        </div>
     
        
      </div>
       
    )

}


export default Home;
