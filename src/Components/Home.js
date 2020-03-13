import React from 'react';
import Background from './img/home.jpg';
import bmiimg from "./img/BMI.png";
import exercise from "./img/exercise.jpg";
import gym from "./img/gym.jpg";
import "./Home.css";


const Home = () =>{
    return(
      
     <div>  
       <div class="#000000 black">
       <div class="row"><div class="col s10">
       <div class="hmimg"> <img src={Background} class="responsive-img" ></img></div>
    </div>
    <div class="row1" ><h2> You must expect great things of yourself before you can do them</h2></div>

    </div>
    <div class="container">
    <div class="row">
      <div class="col s4">
      <div class="row">
    <div class="col-sm-8">
      <div class="card" >
        <div class="card-image">
          <img class="exe" src={exercise}/>
          <span class="card-title ">Start exercise</span>
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
                <p class="grey-text text-lighten-4">We utilise industry leading strength and conditioning coaches, Personal Trainers and state of the art equipment and facilities to offer all Strength HQ members the best possible training and learning experience available. We strive to help you nurture, develop and attain 
                your goals whether it be attending one of our bootcamps using all the cool gear or more specific in the gym..</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Contact Us</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/">Instagram</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://twitter.com/">twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://hussel@gmail.com">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Text
            </div>
          </div>
        </footer>
  
  
  </div>
  
    )
}

export default Home;