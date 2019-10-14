import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor () {
    super();
    this.state = { 
      'sushiMenu': [],
      'currentSushi': [],
      'sushiCounter': 0,
      'emptyPlates': [],
      'money': 100
    };
    this.getallSushi();
    this.getFourSushi();
  }

  getallSushi() {
      fetch(API)
      .then(response =>response.json())
      .then(data => this.setState({'sushiMenu': data}, () => this.getFourSushi()))
  }

  getFourSushi() {
    console.log(this.state.sushiCounter);
    let counter = this.state.sushiCounter;
    let limit = counter + 4;
    let index = 0;
    let fourSushi = [];
    while (counter < limit) {
      fourSushi[index] = this.state.sushiMenu[counter];
      index++;
      if (counter === 99) {
        const newLimit = limit - (counter + 1);
        counter = 0;
        limit = newLimit - 1;
      } else {
        counter++;  
        
      }
    }
    this.setState({'sushiCounter': counter, 'currentSushi': fourSushi});
  }

  handleClickSushi = (id) => {
    console.log('entered handleClickSushi() and id = ' + id)
    
    let sushiObj = this.state.currentSushi.find((element) => element.id === id);
    const sushiIndexInCurrentSushi = this.state.currentSushi.findIndex((element) => element.id === id);
    let fourSushiArray = this.state.currentSushi;
    const sushiIndexInSushiMenu = this.state.sushiMenu.findIndex((element) => element.id === id);
    let sushiMenuArray = this.state.sushiMenu;
    let remainingMoney = this.state.money - sushiObj.price;
    if (remainingMoney >= 0 ) {
      sushiObj.img_url = null;
      fourSushiArray[sushiIndexInCurrentSushi] = sushiObj;
      sushiMenuArray[sushiIndexInSushiMenu] = sushiObj;
      this.setState({currentSushi: fourSushiArray, money: remainingMoney})
      this.addEmptyPlate();
    }
  }

  addEmptyPlate = () => {
    const index = this.state.emptyPlates.length;
    let array = this.state.emptyPlates
    array[index] = 1;
    this.setState({emptyPlates: array});
  }

  handleButtonClick = () => {
    console.log('Entered handleButtonClick')
    this.getFourSushi();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  currentSushi={this.state.currentSushi} handleClickSushi={this.handleClickSushi} handleButtonClick={this.handleButtonClick}/>
        <Table emptyPlates={this.state.emptyPlates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;