import React from "react";
import "./App.css";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import info from "./utils/config/info.json";

// const user = {
//   username: "Bot",
// };

const data = info.User;

const App = () => (
  <div className="App">
    <h1>H1 {data.first_name}</h1>
    <p>You {data.short_bio}</p>
    <p>Your contacts: </p>
    <ul>
      {data.public_contacts.map((item, i) => (
        <li key={i}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
    <Footer copyright="C" />
  </div>
);

export default App;
