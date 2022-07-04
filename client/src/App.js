import './App.css';
import { useState } from 'react';
import Header from './Header';
import Card from './Card';

function App() {
  
  const [cards, setCard] = useState([

    {   id:1,
        username:"wadewilsones",
        userIcon:"https://pixabay.com/get/g407eb29fe629516d0625703714670102f6ef15bd5cef56d41eed4de33f0a852d88db173ab1d199dca1f315def02fa756_640.jpg",
        likes: 456,
        comments: 200,
        descr: "This my favorite dog. His name is Loki!",
        image:"https://pixabay.com/get/g407eb29fe629516d0625703714670102f6ef15bd5cef56d41eed4de33f0a852d88db173ab1d199dca1f315def02fa756_640.jpg",
    },

    {   id:2,
        username:"ursula12",
        userIcon:"https://pixabay.com/get/g7a0ab81d9abc924cf1dca52fb9a6f15344c6993537f3676d4124ad58fc13d242e43f28d021dbc7b6dc78dc07102737b3_640.jpg",
        likes: 124,
        comments: 789,
        descr: "This my favorite cat. His name is Mirka!",
        image:"https://pixabay.com/get/g7a0ab81d9abc924cf1dca52fb9a6f15344c6993537f3676d4124ad58fc13d242e43f28d021dbc7b6dc78dc07102737b3_640.jpg"
    }

])


  return (
    <div className="App">
      <Header username = {cards[0].userIcon} userIcon = {cards[0].userIcon}/>
      <div className='cards' >
      {cards.map (card => 
              <Card 
              key = {card.id}
              username = {card.username}
              userIcon = {card.userIcon}
              likes = {card.likes}
              comments = {card.comments}
              descr = {card.descr}
              image = {card.image}

          />)}
      </div>
    </div>  
  );
}

export default App;
