import React, { useState } from 'react';
import './styles/newPost.css';

function NewPost(props) {

    /*Display Card*/
    const[showPost, setShowPost] = useState(true)

    const closePost = () =>{
        console.log('close')
        setShowPost(false)
    }



  return(
    <>
        {
            showPost?
            <div id ='newPostContainer'>
                <h3>Create new Post</h3>
                <i className="fa fa-times" aria-hidden="true" onClick = {closePost}></i>
                <img src ='../media/image.svg'></img>
                <button >Select from the device</button>
            </div>
            :<div id = 'EmptynewPostContainer'></div>
        }
    </>
    )
}

export default NewPost