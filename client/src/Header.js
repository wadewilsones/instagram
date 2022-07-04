import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewPost from './newPost.js';
import fetching from './axios.js';
import "./styles/Header.css"

function Header(props) {

  const [newPosts, setNewPost] = useState(false)

 /* const createPost = (username) => {
     //async function to add data to dataBase
     fetching.post('/uploadImage', {
        username:props.username,
        userIcon:props.userIcon,
        likes: 0,
        comments: [],
        descr: 'description' ,
        image:'url',
     })

  }
*/
  return (
    <>
    <header>
        <nav>
            <h3>Instagram</h3>
            <div>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type = "search" placeholder='Search' id = 'search'></input>
            </div>
            <ul>
                <li><HomeOutlinedIcon fontSize="large" /></li>
                <li id = 'addIcon'><AddCircleOutlineOutlinedIcon fontSize="large" onClick = {(e) => {newPosts ? setNewPost(false) : setNewPost(true)}} /></li>
                <li><img src = {props.userIcon} alt = {props.username}/></li>
            </ul>
        </nav>
    </header>
    <section>
      {!newPosts ? '' : <NewPost />}
    </section>
     
    </>
  )
}

export default Header

