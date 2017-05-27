import React from 'react';
import PropTypes from 'prop-types';
import './widgets.css'

export class BackwardButton extends React.Component {
  constructor(props){ //instanciar la clase convertir la idea en objeto "real", crear un objeto
    super(props);
    this.state = { isSelected : false };
  }

  // <BACKBUTTON> onClick={()=>{this.prueba()}}
  //  prueba(){
  //    this.props.onClick(); // Este es el que llama al "prueba" del padre
  //    console.log("Funciona");
  //  }

  render(){
    return(
      <div>
        <svg className="widgetButton"
             onClick={()=>{this.props.onClick("back")}}
             viewBox="0 0 10 10" width="100" height="100">
          <path id="backButtonPath" d="M 2 5 L 8 8 L 8 2"/>
        </svg>
      </div>
      )
    }
}
// BackwardButton.propTypes = {
//   onCLick    : PropTypes.func.isRequired
// }
// BackwardButton.defaultProps = {
//   onClick : false
// }

export class PauseButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { isSelected : false };
  }
  render(){
    let isSelected = this.props.isSelected; // true or false
    return(
      <div>
        <svg className="widgetButton"
             onClick={()=>{this.props.onClick("pause")}}
             viewBox="0 0 10 10" width="100" height="100">
          <path id="pauseButtonPath" d="M2 2 L2 8 L4.4 8 L4.4 2 M5.6 2 L5.6 8 L8 8 L8 2 Z"/>
        </svg>
      </div>
      )
    }
}
PauseButton.propTypes = {
  isSelected : PropTypes.bool.isRequired,
  onCLick    : PropTypes.func
}
PauseButton.defaultProps = {
  isSelected : false
}

export class ForwardButton extends React.Component {
  constructor(props){ //instanciar la clase convertir la idea en objeto "real", crear un objeto
    super(props);
    this.state = { isSelected : false };
    // this.handleClick = this.handleClick.bind(this);
  }
  render(){
    let isSelected = this.props.isSelected; // true or false
    return(
      <div>
        <svg className="widgetButton"
             onClick={()=>{this.props.onClick("forward")}}
             viewBox="0 0 10 10" width="100" height="100">
          <path id="forwardButtonPath" d="M 2 2 L 8 5 L 2 8"/>
        </svg>
      </div>
      )
    }
}
ForwardButton.propTypes = {
  isSelected : PropTypes.bool.isRequired,
  onCLick    : PropTypes.func
}
ForwardButton.defaultProps = {
  isSelected : false
}

export class SpeedSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = { speedValue: 1 }; // definimos el estado en React
    this.handleChange = this.handleChange.bind(this); // definimos un ¿método? -> qué hacer cuando hay un cambio
  }

  // function passValue() {
  //   return this.state.speedValue;
  // }

  handleChange() {
    this.setState({speedValue: event.target.value});
    // var a = {value: event.target.value}
    // console.log(a.value);
  }

  render(){
    return(
      <div>
        <input type="range" id="speedSliderInput"
          min={-this.props.topSpeed} max={this.props.topSpeed} // step="1"
          value={this.state.value} // defaultValue={1}
          onChange={this.handleChange}/>
      </div>
    )
  }
}
SpeedSlider.propTypes = {
  topSpeed: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}
SpeedSlider.defaultProps = {
  topSpeed  : 32
}
