import React from 'react';
import Answers from './Answers'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>React Quiz!</h1>
        <h2>{this.props.data.question.body}</h2>
        <Answers
          answers={this.props.data.answers}/>
      </div>
    )
  }
}

export default App
