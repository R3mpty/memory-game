import React, {useEffect, useState, useRef} from 'react'
import Cards from './components/Cards'
import './AppStyles.css'


/*
Notes:
1. Create a array of all the cards
2.
3. Generate a random number
4. Create a newly shuffled array with the random numbers as indexes
5.

*/

function App() {

  console.warn = () => {};

  // const cards = [
  //   'CarriedSkull',
  //   'DualKnife',
  //   'DarkPichu',
  //   'LuckyCat',
  //   'SkullCat',
  //   'TheCircleOfCats'
  // ]

  // const defaultState = cards.reduce((newState, cardName) => (
  //   {...newState, [cardName]: 0}), {});

  // console.log(defaultState);

  // const [selectedCards, setSelectedCards] = useState(defaultState);

  // const increaseCount = (name) => {
  //   setSelectedCards(
  //     {
  //       ...selectedCards,
  //       [name]: selectedCards[name] + 1
  //     }
  //   )
  // }


  let CarriedSkull ={
      name: "CarriedSkull",
      clicked: 0,
  }

  let DualKnife = 
    {
      name: "DualKnife",
      clicked: 0,
    }
  
  let DarkPichu =
    {
      name: "DarkPichu",
      clicked: 0,
    }
  
  let LuckyCat = 
    {
      name: "LuckyCat",
      clicked: 0,
    }
  
  let SkullCat =
    {
      name: "SkullCat",
      clicked: 0,
    }
  
  let TheCircleOfCats = 
    {
      name: "TheCircleOfCats",
      clicked: 0,
    }

  // I don't fully understand the whole reduce thing so I am going to stick with what I had, if my interpretation is correct, the only thing that is different here is that there is a clicked variable
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
  
  // This should do the same things as the two function given
  const randomizeOrder = (listOfCards) => {
    let newArray = [];

    for (let i = 0; i < 6; i++){
      newArray[order] = listOfCards[i];
      setOrder(order = (Math.floor((Math.random() * 6) + 1)));
    }

    console.log(newArray)
    return newArray;

  }

  const clickAndCheck = (card) => {
    card.clicked = card.clicked + 1; // not fully sure why I don't need setState here
    
    listOfCards = randomizeOrder(listOfCards);

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

        {/* Can you show me how you would pass the rest of the information in for the cards to display properly? */}
        {listOfCards.map(card => (<Cards key = {card} />))}
      </div>


    </div>
  );
}


export default App;


// archived:
{/* <Cards  onClick = {() => {clickAndCheck(CarriedSkull)}} className = {randomizeOrder} name = "Carried Skull" src = "/imgs/CarriedSkull.png"/>

<Cards onClick = {() => {clickAndCheck(DarkPichu)}} className = {randomizeOrder}  name = "Dark Pichu" src = "/imgs/DarkPichu.png"/>

<Cards onClick = {() => {clickAndCheck(DualKnife)}} className = {randomizeOrder}  name = "Dual Knife" src = "/imgs/DualKnife.png"/>

<Cards onClick = {() => {clickAndCheck(LuckyCat)}} className = {randomizeOrder}  name = "Lucky Cat" src = "/imgs/LuckyCat.png"/>

<Cards onClick = {() => {clickAndCheck(SkullCat)}} className = {randomizeOrder}  name = "Skull Cat" src = "/imgs/SkullCart.png"/>

<Cards onClick = {() => {clickAndCheck(TheCircleOfCats)}} className ={randomizeOrder}   name ="TheCircleOfCats" src = "/imgs/TheCircle.png"/> */}