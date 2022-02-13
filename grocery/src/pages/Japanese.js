import React from "react";


const character = {
  color: "white",
  textAlign: "left",
  margin: "28px 0 0 78px"
}

export default function Japanese() {
  const dishes =  [
    { "name": "sushi", "content": "test1", "image": "test.jpg" },
    { "name": "takoyaki", "content": "test2", "image": "test2.jpg" },
    { "name": "udon", "content": "delicious!", "image": "test3.jpg" },
    ]
  const listItems = dishes.map(item => item.content)
return (
    <div>
        <h1 style={character}>Japanese food page</h1>
      <h2 style={character}>{listItems}</h2>
    </div>
  );
}
