
import React, { Component } from 'react';
import { render } from 'react-dom';
import gym1 from "./img/g1.jpg";
import gym2 from "./img/g2.jpg";
import gym3 from "./img/g3.jpg";
import gym4 from "./img/g4.jpg";
import gym5 from "./img/g5.jpg";
import gym6 from "./img/g6.jpg";



class Find_gym extends Component {
    constructor() {
      super();
      this.state = {
        initialItems : [
         ""
        ],
        items: []
      };
  
      this.filterList = this.filterList.bind(this);
  
    }
  
    componentWillMount(){
      this.setState({
        items: this.state.initialItems
      });
    }
  
    filterList(e){
      let updateList = this.state.initialItems;
      updateList = updateList.filter(item => {
        return item.toLowerCase().search(
          e.target.value.toLowerCase()
          ) !== -1;
      });
  
      this.setState({
        items: updateList
      });
    }
  
    render() {
      return (

        <div>
        <React.Fragment>
            <label><h3>Enter the name of city</h3></label>
          <input type="text" onChange={this.filterList} />
          <ul>
            {this.state.items.map(item => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </React.Fragment>

        <div class="row">

        <div class="col s4">
      <div class="row">
    <div class="col-sm-8">
      <div class="card" >
        <div class="card-image">
          <img class="exe" src={gym1}/>
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
          <img class="bmi" src={gym2}/>
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
          <img class="gym" src={gym3}/>
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

<div class="col s4">
      <div class="row">
    <div class="col-sm-8">
      <div class="card" >
        <div class="card-image">
          <img class="exe" src={gym4}/>
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
          <img class="bmi" src={gym5}/>
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
          <img class="gym" src={gym6}/>
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



      );
    }
  }
  


export default Find_gym;