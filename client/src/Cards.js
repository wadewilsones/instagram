import React, { useState, useEffect } from 'react';
import "./styles/Cards.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Cards() {

    const [cards, setCards] = useState([
        {   id:1,
            username:"wadewilsones",
            userIcon:"https://pixabay.com/get/gdffffb62694a4baba487df0af8dcb01b71bf29ca5564ab805fec645cc652f211dc8f4a6b92d7feb40e3a0ddbddf4964c_640.jpg",
            likes: 456,
            comments: 200,
            descr: "This my favorite dog. His name is Loki!",
            image:"https://pixabay.com/get/gdcf4f32e89958fd4afece2d2c5acf87d40db0a34560b94990579edbc7c1a9366f11c05e283d4b2eb6276d19b9996fcd5_1920.jpg"
        },
        {   id:2,
            username:"ursula12",
            userIcon:"https://pixabay.com/get/g1d5988e1ef9918968e65ef5ada50a7829f7a6d95ce13fadedb32c5dcf99f32768f39aadb25ec55c7e5181d8726b424b5_640.jpg",
            likes: 124,
            comments: 789,
            descr: "This my favorite cat. His name is Mirka!",
            image:"https://pixabay.com/get/g065b5c0e93dfb5ec42695632ec9f76706d55dc888c19781efbe589671bed86846eeb5a853ae55d9e2f1b8ee60ec134d2_640.jpg"
        },

    ])

    const [like, putLike] = useState(false)

    const likePost = () =>{
        if(like){
            putLike(false)
        }
        else{
            putLike(true)
        }
    }


  return (
    <div className = "cards">

    {cards.map((card) => {return (
        <div id = "card" key = {card.id}>
            <section id = 'card_user'>
                <img src = {card.userIcon} alt = {card.username} />
                <p>{card.username}</p>
            </section>
            <section id = 'card_img'>
                <img src = {card.image} ></img>
            </section>
            <section id = 'card_likes'>
                <i>{like? <FavoriteIcon onClick = {likePost}/> : <FavoriteBorderIcon onClick = {likePost}/>}</i>
                <p>{card.likes} likes</p>
            </section>
            <section id = 'card_descr'>
                <p><span>{card.username}</span> {card.descr}</p>
            </section>
            <section id = 'post_comment'>
                <input type = 'text' placeholder = "Add a comment..."></input>
                <input type = "submit" value = "Post"></input>
            </section>
        </div>
        
    )})}

     
         
    </div>
  )
}

export default Cards