
import './App.css';
import React from "react";

function App() {

  return (
    <div className="App">
     
     <br></br><br></br><br></br>
      <div class="dog">
        <div class="controls">
          <div class="half">
            <text>Breed</text>
            <div class="half">
              <select name="" id="dropdown">
                <option selected disabled>Select</option>
              </select>
            </div>
          </div>

          <div class="half">
            <text> Sub Breed</text>
            <div class="half">
              <select name="" id="">
                <option selected disabled>Select</option>
              </select>
            </div>
          </div>

          <div class="half">
            <text>Number of images</text>
            <div class="half">
              <select name="" id="">
                <option selected disabled>Select</option>
              </select>
            </div>
          </div>

          <div class="half">
            <button class="get-dog">View Images</button>
           
          </div>

          <div class="loader-wrapper">
      <img class="loader" src="logo192.png" alt=""/>
    </div>
    
          <div class="images">

          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
