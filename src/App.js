import React, { useEffect, useState } from "react";
import "./App.css";

import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';

//constructor
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //run code based on given condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();
    //secure url, hide access token
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      //get user profile json
      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }

    console.log("I have a token>>", token);
  }, []);

  return (
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
