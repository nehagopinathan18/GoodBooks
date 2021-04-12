import "./styles.css";
import { useState } from "react";
const bookDB = {
  Javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  Fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedButton, setButton] = useState("Javascript");
  function clickHandler(item) {
    setButton(item);
    // console.log("CLICKED",item);
  }

  return (
    <div className="App">
      <h1> 📚 Good Books Read</h1>
      <p>Checkout my favorite books. Select a genre to get started </p>
      <div>
        {Object.keys(bookDB).map((item) => (
          <button className="selectionTabs" onClick={() => clickHandler(item)}>
            {item}
          </button>
        ))}
      </div>

      <hr></hr>
      <div>
        <ul>
          {bookDB[selectedButton].map((book) => (
            <li className="list" key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
