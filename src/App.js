import React from 'react';
import ToDo from './component/ToDo/ToDo'
import styles from './App.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ToDo />
      </div>
    )
  }
}

export default App;
