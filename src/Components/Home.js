import React from 'react';
import Background from './img/home.jpg';
import bmiimg from "./img/BMI.png";
import exercise from "./img/exercise.jpg";
import gym from "./img/gym.jpg";
import "./Home.css";



 
var sectionStyle = {
  width: "100%",
  height: "720px",
  backgroundImage: `url(${Background})`
};


const Home = () =>{
    return(
      
     <div >  
       <div class="#000000 black">
       <div class="row"><div class="col s8">
        <img src={Background} class="img-fluid" alt="Responsive image"></img>
    </div>
    <div class="row1" ><h2> stay fit</h2></div>

    </div>
    <div class="container">
    <div class="row">
      <div class="col s4">
      <div class="row">
    <div class="col-sm-8">
      <div class="card" >
        <div class="card-image">
          <img class="exe" src={exercise}/>
          <span class="card-title">Start exercise</span>
        </div>
        <div class="card-content">
          <p><br></br>Exercise helps people lose weight and lower the risk of some diseases. Exercising regularly decreases 
            a person’s risk of developing certain diseases, including obesity, type 2 diabetes, and high blood pressure.</p>
        </div>
        <div class="card-action">
          <a href="./Exercise">Start exercise</a>
        </div>
      </div>
    </div>
  </div>

      </div>
      <div class="col s4"><div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-image">
          <img class="bmi" src={bmiimg}/>
          <span class="card-title">BMI(Body mass index)</span>
        </div>
        <div class="card-content">
          <p>Body mass index, or BMI, is a measure of body size. It combines a person’s weight with their height. 
            The results of a BMI measurement can give an idea about whether a person has the correct weight for their height</p>
        </div>
        <div class="card-action">
          <a href="./BMI">BMI(Body mass index)</a>
        </div>
      </div>
    </div>
  </div>
</div>
      <div class="col s4"><div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-image">
          <img class="gym" src={gym}/>
          <span class="card-title">Find gym</span>
        </div>
        <div class="card-content">
          <p>Going to the gym every day is one way to accomplish some goals. Regular exercise carries many physical and mental health benefits. It boosts the brainpower and sharpens our memory, one can improve self confidence. 
            </p>
        </div>
        <div class="card-action">
          <a href="./Find_gym">Find gym</a>
        </div>
      </div>
    </div>
  </div>
</div>
     
    </div>
    </div>

    </div>

   <footer class="page-footer"> 
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">HUSSLE</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  
  
  </div>
  
    )
}

export default Home;