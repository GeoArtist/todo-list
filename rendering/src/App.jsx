import { Form } from './components/Form';
import { LikesCoutner } from './components/LikesCounter';
import { Plot } from './components/Plot';
import { Reviews } from './components/Reviews';
import { useState } from 'react';


const initialReviews = [
  {author: "Brian", text: "This is a great movie!", id:1},
  {author:"John", text: "I didn't like this movie", id:2},
]
function App() {
  const [reviews,setReviews] = useState(initialReviews);
  const [counterShown, setCounterShown] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(50);
  
  
  function handleLikeButtonClick(){
    setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +1);
  }

  function handleLoveButtonClick(){
    setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +3)
  }


  return (
   <>
    <h1>Gwiezdene Wojny V</h1>
    <h2>Rok produkcji: 1980</h2>

    <button 
      onClick={()=>{setCounterShown((prevCounterShown)=>!prevCounterShown)}}>
        {counterShown ? 'Schowaj counter' : "Pokaż counter"}
    </button>
    {counterShown && <LikesCoutner 
          numberOfLikes={numberOfLikes} 
          onLikeButtonClick={handleLikeButtonClick}
          onLoveButtonClick={handleLoveButtonClick}
          
          />}
    
    <Plot/>
    <Reviews reviews={reviews}/>
    <Form 
      onReviewSubmit={(author, text)=>
        setReviews((prevReviews)=>{
          return [{author, text, id: prevReviews.length + 1},
             ...prevReviews];
    })}/>
   </>
  )
}

export default App


