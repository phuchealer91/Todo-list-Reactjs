import React from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

 class TrafficLight extends React.Component {
   constructor(){
     super();
     this.state = {
      current : GREEN
     } 

    //  setInterval(()=>{
    //   this.setState({
    //       current: !current
    //   })
    //  },1000);
   }
   onSetState3 = () =>{
    this.setState({
        current : this.getNextColor(this.state.current)
    })
   }
 

   getNextColor(color){
     switch(color){
       case RED:
         return ORANGE;
       case ORANGE:
         return GREEN;
       default:
         return RED;
     }
   }
   render(){
    const current = this.state.current;
      return (
        <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-primary mx-5 mt-5" onClick={this.onSetState3}>
                Start
                </button>     
                </div>
          <div className="TrafficLight">
          <div className={classNames('bulb','red',{
            active: current === RED
          })}></div>
          <div className={classNames('bulb','orange',{
            active: current === ORANGE
          })}></div>
          <div className={classNames('bulb','green',{
            active: current === GREEN
          })}></div>    
        </div>
        </div>

      );
     }
   }


export default TrafficLight;
