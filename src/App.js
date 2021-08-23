import React, {useEffect, useState, useRef} from 'react'
import Cards from './components/Cards'
import './AppStyles.css'


function App() {

  console.warn = () => {};

  
  let [CarriedSkull, setCarriedSkull] = useState(
    {
      name: "CarriedSkull",
      clicked: 0,
      // test : useRef(null)
    }
  )
  let [DualKnife, setDualKnife] = useState(
    {
      name: "DualKnife",
      clicked: 0,
    }
  )
  let [DarkPichu, setDarkPichu] = useState(
    {
      name: "DarkPichu",
      clicked: 0,
    }
  )
  let [LuckyCat, setLuckyCat] = useState(
    {
      name: "LuckyCat",
      clicked: 0,
    }
  )
  let [SkullCat, setSkullCat] = useState(
    {
      name: "SkullCat",
      clicked: 0,
    }
  )
  let [TheCircleOfCats, setTheCircleOfCats] = useState(
    {
      name: "TheCircleOfCats",
      clicked: 0,
    }
  )

  let [listOfCards, setListOfCards] = useState([
    CarriedSkull,
    DualKnife,
    DarkPichu,
    LuckyCat,
    SkullCat,
    TheCircleOfCats,
  ])
 
  // stuck on randomizing the order
  let [order, setOrder] = useState(Math.floor((Math.random() * 6) + 1));
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  useEffect(() => {
  }, [score, highScore]);
  
  const randomizeOrder = (card) => {
    //card.style.order = order; // card is not a dom element here, it is an object

  }

  const clickAndCheck = (card) => {
    card.clicked = card.clicked + 1; // not fully sure why I don't need setState here
    
    randomizeOrder(card);

    if (card.clicked > 1) {
      console.log("You Lose");

      if (score > highScore){
        setHighScore(highScore = score);
      }

      setScore(score = 0);
      
      // Setting all the click black to 0;
      listOfCards.forEach(card => {
        card.clicked = 0;
      })
    }

    else{
      setScore(score + 1);
    }
  }

 

  return (

    <div className="App">

      <div id="header"> 
          <h1> Memory Game</h1>
          <div id = "score-board">
              <div id = "score"> Your score: {score}</div>
              <div id = "high-score"> High score: {highScore}</div>
          </div>
      </div>

      <div id="cardContainer">
        <Cards  onClick = {() => {clickAndCheck(CarriedSkull)}} className = {randomizeOrder} name = "Carried Skull" src = "/imgs/CarriedSkull.png"/>

        <Cards onClick = {() => {clickAndCheck(DarkPichu)}} className = {randomizeOrder}  name = "Dark Pichu" src = "/imgs/DarkPichu.png"/>

        <Cards onClick = {() => {clickAndCheck(DualKnife)}} className = {randomizeOrder}  name = "Dual Knife" src = "/imgs/DualKnife.png"/>

        <Cards onClick = {() => {clickAndCheck(LuckyCat)}} className = {randomizeOrder}  name = "Lucky Cat" src = "/imgs/LuckyCat.png"/>

        <Cards onClick = {() => {clickAndCheck(SkullCat)}} className = {randomizeOrder}  name = "Skull Cat" src = "/imgs/SkullCart.png"/>

        <Cards onClick = {() => {clickAndCheck(TheCircleOfCats)}} className ={randomizeOrder}   name ="TheCircleOfCats" src = "/imgs/TheCircle.png"/>
      </div>


    </div>
  );
}


export default App;
