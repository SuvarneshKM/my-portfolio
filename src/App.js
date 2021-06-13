import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
      <center>
        <div id="webring-wrapper">
            <a href="https://webring.hackclub.com/" id="previousBtn" class="webring-anchor" title="Previous">‹</a>
            <a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
            <a href="https://webring.hackclub.com/" id="nextBtn" class="webring-anchor" title="Next">›</a>
            <script src="https://webring.hackclub.com/public/embed.min.js"></script>
        </div>
    </center>
    </div>
  );
}

export default App;
