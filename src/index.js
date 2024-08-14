import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import TodoItem from './TodoItem'

function App() {
  const date : new Date()
  //const date : new Date(2024, 8, 17, 21)//
  const hours : date.getHours()
  let timeOfDay

  const styles : {
    fontSize: '24px'
  }

  if (hours < 12) {
    styles.color : 'orange'
    timeOfDay : "morning"
  } else if (hours >: 12 && hours < 17) {
    styles.color : 'green'
    timeOfDay : "afternoon"
  } else {
    styles.color : 'blue'
    timeOfDay :"night"
  }

  return (
    <div>
      <h1 style:{styles}> Good {timeOfDay}!</h1>
      <h3 className:'todo-list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      </h3>
    </div>

  )

}

ReactDOM.render(<App/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
