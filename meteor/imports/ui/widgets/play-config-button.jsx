import React from 'react';
import PropTypes from 'prop-types';

export class PlayConfigWidgetSVG extends React.Component{
  constructor(props){ //instanciar la clase convertir la idea en objeto "real", crear un objeto
    super(props);
  }

  handleClick(buttonPar){
    console.log("Hola! "+buttonPar);
  }

  render(){ // método
    let playStatus = this.props.playStatus; // -1 reverse, 0 pause, 1 play
    let playSpeed = this.props.playSpeed;

    var squarePos;
    if (playSpeed == -1) {
      squarePos = 5;
    } else if (playSpeed == 0) {
      squarePos = 105;
    } else {
      squarePos = 205;
    }

    // ¿Cómo consigo que el click del botón active la animación en JSX?

    return(
      <div>
        <div className="play config button">
          <p style={{display: 'flex', justifyContent: 'center'}}>
            <font color="grey"><b><em>¡En pruebas!</em></b></font>
          </p>

          <div id="playSettings">
            <p>
              Play status (-1 backward, 0 pause, 1 forward):
              <span id="playStatus" style={{fontWeight: 'bolder'}}/>
            </p>
            <p>
              Play speed (from -X to +X):
              <span id="playSpeed" style={{fontWeight: 'bolder'}}/>
            </p>
            <p>
              Timeline:
              <span id="timeline" style={{fontWeight: 'bolder'}}/>, currently
              <span id="currInstant" style={{fontWeight: 'bolder'}}/>
            </p>
          </div>
        </div>

        <div>
          <svg width="300" height="160">
            <rect width="300" height="160" fill="silver" stroke="black" strokeWidth=".5"/>
            <rect width="300" height="25" fill="grey" stroke="black" strokeWidth=".5"/>

            <svg className="speed"
                 width="300" height="25" x="0" y="0"
                 viewBox="0 0 120 10">
                <defs>
                  <line id="mainLine" y1="2" y2="10" strokeWidth="0.5" stroke="black"/>
                  <line id="subLine" y1="4" y2="10" strokeWidth="0.5" stroke="black" strokeOpacity="0.5"/>
                  <path id="speedDial" fill="red" fillOpacity="0.7"
                        d="M0.5 4.5 L0 5 L6 5 L5.5 4.5 L4 4 L4 1 L3 -2 L2 1 L2 4 Z" transform="translate(-3 -5)"/>
                </defs>
            </svg>

            <rect width="300" height="100" y="25" fill="darkgrey" stroke="black" strokeWidth=".5"/>

            <svg className="selection"
                 width="300" height="100" x="0" y="25"
                 viewBox="0 0 300 100">
                <rect width="90" height="90" x={squarePos} y="5" fill="dimgrey">
                  <animate id="toBack"
                           attributeName="x" to="5"
                           begin="backward.click" dur="0.1s" keySplines=".4 0 1 1" fill="freeze"/>
                  <animate id="toPause"
                           attributeName="x"
                           to="105"
                           begin="playPause.click" dur="0.1s" keySplines=".4 0 1 1" fill="freeze"/>
                  <animate id="toForward"
                           attributeName="x"
                           to="205"
                           begin="forward.click" dur="0.1s" keySplines=".4 0 1 1" fill="freeze"/>
                </rect>
            </svg>

            <svg className="backward" id="backward"
                 onClick={()=>{ this.props.onCLick("backward"); playSpeed=-1 }}
                 width="100" height="100" x="0" y="25" viewBox="0 0 36 36">
              <path id="backwardPath"
                        d="M 11 18 L 26 26 L 26 10"/>
              <rect width="18" height="18" x="9" y="9" fill="transparent"/>
            </svg>

            <svg className="playPause" id="playPause"
                 onClick={()=>{ this.props.onCLick("playPause"); playSpeed=0 }}
                 width="100" height="100" x="100" y="25" viewBox="0 0 36 36">
              <path id="playPausePath"
                        d="M11 10 L17 10 L17 26 L11 26 M20 10 L26 10 L26 26 L20 26 Z"/>
              <rect width="18" height="18" x="9" y="9" fill="transparent"/>
            </svg>

            <svg className="forward" id="forward"
                 onClick={()=>{ this.props.onCLick("forward"); playSpeed=1 }}
                 width="100" height="100" x="200" y="25" viewBox="0 0 36 36">
              <path id="forwardPath"
                        d="M11 10 L11 26 L26 18 Z"/>
              <rect width="18" height="18" x="9" y="9" fill="transparent"/>
            </svg>

            <svg className="textHub"
                 width="300" height="35" y="125" viewBox="0 0 300 35">
              <text x="150" y="17.5" textAnchor="middle"
                    fontSize="75%" fontFamily="Verdana" fontWeight="bold" fill="black">
                <tspan id="fechaTextHub" alignmentBaseline="central">Mar. 16 Mayo 2017 - </tspan><tspan id="horaTextHub" alignmentBaseline="central">11:00:00 UTC</tspan>
              </text>
            </svg>
          </svg>
        </div>
      </div>
      )
    }
}
PlayConfigWidgetSVG.propTypes = {
  playStatus : PropTypes.number.isRequired,
  playSpeed  : PropTypes.number.isRequired,
  onCLick    : PropTypes.func
}
PlayConfigWidgetSVG.defaultProps = {
  playStatus : 0,
  playSpeed  : 1
}

// #############################################################################
// #############################################################################
// #############################################################################

// 1
export class BackwardButton extends React.Component {
  constructor(props) { //instanciar la clase convertir la idea en objeto "real", crear un objeto
    super(props);
    this.state = { isSelected : false };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(elevateParameter,selectionState) {
    this.state.isSelected = !selectionState;
    if (selectionState) {
      elevateParameter = "pause";
      this.props.onClick(elevateParameter); // Este es el que llama al "prueba" del padre
    } else {
      this.props.onClick(elevateParameter);
    }
  }

  render() {
    return (
      <div>
        <svg className="widgetButton"
             onClick={()=>{this.buttonClick("back",this.state.isSelected)}}
             viewBox="0 0 10 10" width="100" height="100">
          <path id="backButtonPath" d="M 2 5 L 8 8 L 8 2"/>
        </svg>
      </div>
    )
  }
}
// BackwardButton.defaultProps = {
//   onClick: {()=>console.log("No acction was assigned for click.")} // No funciona!
// }
BackwardButton.propTypes = {
  onCLick: PropTypes.func //.isRequired
}

// 2
export class PauseButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { isSelected : false };
    this.buttonClick = this.buttonClick.bind(this);
  }

   buttonClick(elevateParameter,par2) {
     this.props.onClick(elevateParameter);
     // console.log(elevateParameter);
   }

  render(){
    return(
      <div>
        <svg className="widgetButton"
             onClick={()=>{this.buttonClick("pause")}}
             viewBox="0 0 10 10" width="100" height="100">
          <path id="pauseButtonPath" d="M2 2 L2 8 L4.4 8 L4.4 2 M5.6 2 L5.6 8 L8 8 L8 2 Z"/>
        </svg>
      </div>
    )
  }
}
PauseButton.propTypes = {
  onCLick: PropTypes.func
}

// 3
export class ForwardButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { isSelected : false };
  }
  render(){
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
  onCLick: PropTypes.func
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


// #############################################################################
// #############################################################################
// #############################################################################
// #############################################################################
// #############################################################################
// #############################################################################
// #############################################################################


export class PlayConfigMulticomponentWidget extends React.Component{
  constructor(props){ //instanciar la clase convertir la idea en objeto "real", crear un objeto
    super(props);
    this.state = {
      playStatus: 1, // -1, 0 ó 1
      playSpeed: 1
    }
  }

  handleClick(buttonPar){
    console.log("Pressed "+buttonPar+"!");
    // if (buttonName == "back") {
    //   playStatus = -1;
    //   console.log("Something worked in back");
    // } else if (buttonName == "pause") {
    //   playStatus = 0;
    //   console.log("Something worked in pause");
    // } else if (buttonName == "forward") {
    //   playStatus = 1;
    //   console.log("Something worked in forward");
    // }
  }

  handleChange(value){
    console.log("The dial has value "+value+"!");
  }

  render(){ // método
    let playStatus = this.props.playStatus; // -1 reverse, 0 pause, 1 play
    let playSpeed = this.props.playSpeed;

    var squarePos;
    if (playSpeed == -1) {
      squarePos = 5;
    } else if (playSpeed == 0) {
      squarePos = 105;
    } else {
      squarePos = 205;
    }

    // ¿Cómo consigo que el click del botón active la animación en JSX?

    return(
      <div>
        <BackwardButton isSelected={false} onClick={ this.handleClick.bind(this) }/>
        <PauseButton    isSelected={false} onClick={ this.handleClick.bind(this) }/>
        <ForwardButton  isSelected={false} />
        <SpeedSlider    topSpeed={10} handleChange={ this.handleChange.bind(this) }/>
        <div>
          <div>
            <div>
              <p>Play status (-1 backward, 0 pause, 1 forward):
                <span style={{fontWeight: 'bolder'}}>
                  {this.state.playStatus}
                </span>
              </p>
              <p>Play speed (from -X to +X):
                <span style={{fontWeight: 'bolder'}}>
                  {this.state.playSpeed}
                </span>
              </p>
              <p>Timeline:
                <span style={{fontWeight: 'bolder'}}>

                </span>, currently
                <span style={{fontWeight: 'bolder'}}>

                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
PlayConfigMulticomponentWidget.defaultProps = {
  topSpeed: 32,
}
PlayConfigMulticomponentWidget.propTypes = {
  topSpeed : PropTypes.number.isRequired
}
