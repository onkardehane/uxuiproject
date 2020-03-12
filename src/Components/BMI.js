import React, {Component} from 'react';
import imgbim1 from "./img/bmi3.png"
import imgbim2 from "./img/bmi4.png"
import imgbim3 from "./img/bmi5.png"
import "./BMI.css"
class BMI extends Component{
    constructor(props){
        super(props);
        this.state = { weight: '', height: '', bmi: '', message: '', optimalWeight: '', isSubmit: false};
        this.handleChange = this.handleChange.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
}


calculateBMI(){
    let heightSquared = (this.state.height/100 * this.state.height/100);
    let bmi = this.state.weight / heightSquared;
    let low = Math.round(18.5 * heightSquared);
    let high = Math.round(24.99 * heightSquared);
    let message = "";
    if(bmi >= 18.5 && bmi <= 24.99){
        message = "You are in a healthy weight range";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
    }
    else if(bmi >= 30){
        message="You are obese";
    }
    else if(bmi < 18.5){
        message="You are under weight";
    }
    this.setState({message: message});
    this.setState({optimalWeight: "Your suggested weight range is between "+low+ " - "+high});
    this.setState({
        bmi: Math.round(bmi * 100) / 100,
        optimalWeight: "Your suggested weight range is between "+low+ " - "+high,
        message,
        isSubmit : true
    }, () => console.log(this.state));

}


handleSubmit(e){
    this.calculateBMI();
    e.preventDefault();
    console.log(this.state.bmi);

}


render() { 

    return (
<div className="bg">
        <div class="row">
        
        <div class="col s12"> 
        <div class="col s4">
         <div className='container'>
        <div className="BMI">
                <div className="BMI-header">
                    <h2>BMI calculator</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    
                    <h3>
                        Enter your height in cm
                    </h3>
                    <input className="input1" type="number" name="height" value={this.state.height} onChange={this.handleChange} />
                    <h3>
                        Enter your weight in kg
                    </h3>
                    <input className="input1" type="number" name="weight" value={this.state.weight} onChange={this.handleChange} />
                    <input className="subbtn" type="submit" value="Submit"/>
                    
                </form>
                {this.state.isSubmit ? 
                    <div>
                        <h3>Your Weight:
                        <span>{this.state.weight}</span>
                        </h3> 
                        <h3>Your height:
                        <span> {this.state.height}</span></h3> 
                        <h3>BMI:
                        <span> {this.state.bmi}</span></h3>
                        <h3>
                        <span> {this.state.message}</span></h3>
                        <h3>
                        <span> {this.state.optimalWeight}</span></h3>
                    </div> : null
                }
            </div>


            </div>
            </div>
            <div class="col s4">
                <div class="bg1">
                  <div class="bg2">  <img src={imgbim3} className="img-fluid" alt="Responsive image" className="bmiimg1"></img></div>
                <img src={imgbim1} className="img-fluid" alt="Responsive image" className="bmiimg1"></img>
                <img src={imgbim2} className="img-fluid" alt="Responsive image" className="bmiimg1"></img></div>
            
             </div>
            
            </div>
            
            
            
      </div>
       <br></br>


       <br></br>
       <br></br><br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>


       
      </div>

    );
}
}

export default BMI;