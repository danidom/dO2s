import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { PlayConfigWidgetSVG, PlayConfigMulticomponentWidget } from '../widgets/play-config-button';
import { SpeedSlider } from '../widgets/playback-widget-elements'


// const Home = () => (<h3>Home</h3>);
// export default Home;

export default class Home extends Component{
  onClick(param){
    console.log(param);
  }

  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <PlayConfigMulticomponentWidget topSpeed={10}/>
        {/* <PlayConfigWidgetSVG playStatus={1} playSpeed={1} onClick={this.funcTest}/> */}

        {/* <div className="playbackStatus">
          <div id="playSettings">
            <p>Play status (-1 backward, 0 pause, 1 forward):
              <span style={{fontWeight: 'bolder'}}>
                {t}
              </span>
            </p>
            <p>Play speed (from -X to +X):
              <span id="playSpeed" style={{fontWeight: 'bolder'}}/>
            </p>
            <p>Timeline:
              <span id="timeline" style={{fontWeight: 'bolder'}}/>, currently
              <span id="currInstant" style={{fontWeight: 'bolder'}}/>
            </p>
          </div>
        </div> */}
      </div>
      )
    }
  }
