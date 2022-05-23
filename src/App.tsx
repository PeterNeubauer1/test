import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button } from "./components/Button" // Functional Component
import UserManagement from "./components/UserManagement"

class App extends React.Component {

  /*constructor(props: any) {
    super(props)
  }*/
  
  render() {
    return (
      <> {/* JSX elements must have at least one parent element*/}
        <h1> React "User Management" App </h1>
        <UserManagement />
        {/*
        <Button className="add">Add</Button>
        <Button className="reduce">Reduce</Button>
        */}
      </>
    )
  }
}

export default App;
