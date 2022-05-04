import React from "react";
import "./App.css";
import { Footer } from "./Footer";
import info from "./utils/config/info.json";

// const user = {
//   username: "Bot",
// };

const App = () => (
  <div className="App">
    <h1>H1 {info.User.first_name}</h1>
    <p>You {info.User.short_bio}</p>
    <p>Your contacts: </p>
    <ul>
      {info.User.public_contacts.map((item, i) => (
        <li key={i}>
          <a href="#contact" target="_blank">
            {item}
          </a>
        </li>
      ))}
    </ul>
    <Footer copyright="C" />
  </div>
);

export default App;
