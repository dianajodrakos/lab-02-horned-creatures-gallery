import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from "./ImageList.js";
import data from './data.js';


export default class App extends Component {

  state = {
    dropdownSelection: '',
  }

  filterChoice = (e) => {
    this.setState({ dropdownSelection: e.target.value })
  }

  render() {
    let filteredData = data;

    if (this.state.dropdownSelection) {
      filteredData = data.filter(item => item.keyword === this.state.dropdownSelection);
    }

    return (
      <div className="App">
        { console.log(this.state) }
        { console.log(filteredData) }
        <Header />

        <select onChange={this.filterChoice}>
          <option value="">view all</option>
          <option value="narwhal">narwhal</option>
          <option value="rhino">rhino</option>
          <option value="unicorn">unicorn</option>
          <option value="unilego">unilego</option>
          <option value="triceratops">triceratops</option>
          <option value="markhor">markhor</option>
          <option value="mouflon">mouflon</option>
          <option value="addax">addax</option>
          <option value="chameleon">chameleon</option>
          <option value="lizard">lizard</option>
          <option value="dragon">dragon</option>
        </select>
        <ImageList images={filteredData}/>
      </div>
    );
  }
}



