import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./styles/Cards.css";


function Card (props) {

    const [like,setLikes] = useState (false);

  return (
    <div id = "card" key = {props.id}>
            <section id = 'card_user'>
                <img src = {props.userIcon} alt = {props.username} />
                <p>{props.username}</p>
            </section>
            <section id = 'card_img'>
                <img src = {props.image} onClick = {(e) => {like? setLikes(false): setLikes(true)}}></img>
            </section>
            <section id = 'card_likes'>
                <i id = 'likeIcon'>
                    {like? (<FavoriteIcon onClick = {(e) => {setLikes(false)}}/>): <FavoriteBorderIcon  onClick = {(e) => {setLikes(true)}}/>}
                </i>
                <p>{like? props.likes +1 : props.likes} likes</p>
            </section>
            <section id = 'card_descr'>
                <p><span>{props.username}</span> {props.descr}</p>
            </section>
            <section id = 'post_comment'>
                <input type = 'text' placeholder = "Add a comment..."></input>
                <input type = "submit" value = "Post"></input>
            </section>
    </div>
  )
}

export default Card