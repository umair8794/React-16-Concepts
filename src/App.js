import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';
import Modal from './components/Modal';

class App extends Component {

    handleClick() {
        console.log("I was clicked");
    }

  render() {
    return (
        <div className="App" onClick={this.handleClick}>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>

            <ErrorBoundary>
                <StudentForm />
            </ErrorBoundary>

            <Modal>
                <div className="modal">
                    This is the modal window
                    <button>Close x</button>
                </div>
            </Modal>
        </div>
    );
  }
}

export default App;
