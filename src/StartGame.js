import React from "react"
class StartGame extends React.Component {

  render(){
    let button = <button  onClick={this.props.startGame} className="btn btn-primary btn-lg">Start Game!</button>
    if(this.props.started)  { button = null}
    if(this.props.judgeGame){ button = null}

    return(
      <div>
        {button}
      </div>
    )
  }
}//class

export default StartGame