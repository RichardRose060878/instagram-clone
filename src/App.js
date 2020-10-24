import React, { useState, useEffect } from "react";
import Post from "./components/Post/Post";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // This is where code runs
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a anew post is added, this code fires....
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}

      {/* <Post 
      username="Helen Morris"
      caption="Wow day three of live sessions!"
      imageURL="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
      /> */}

      {/* <Post 
      username="Samuel Rose"
      caption="Looking cool dad!"
      imageURL="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      
      /> */}
    </div>
  );
}

export default App;
