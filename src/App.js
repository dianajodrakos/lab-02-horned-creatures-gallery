import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from "./ImageList.js";
import data from './data.js';


export default class App extends Component {

  state = {
    keyword: '',
    horns: '',
  }

  keywordFilter = (e) => {
    this.setState({ keyword: e.target.value });
    console.log(this.state);
  }
  
  hornsFilter = (e) => {
    this.setState({ horns: Number(e.target.value) });
    console.log(this.state);
  }

  render() {
    let filteredData = data.slice();

    if (this.state.keyword && !this.state.horns) {
      filteredData = filteredData.filter(item => item.keyword === this.state.keyword);
    } if (this.state.horns && !this.state.keyword) {
      filteredData = filteredData.filter(item => item.horns === this.state.horns);
    } if (this.state.keyword && this.state.horns) {
      filteredData = filteredData.filter(item => ((item.keyword === this.state.keyword) && (item.horns === this.state.horns)));
    }

    return (
      <div className="App">
        { console.log(this.state) }
        { console.log(filteredData) }
        <Header />

        <label htmlFor="keyword">Type:</label>
        <select id="keyword" onChange={this.keywordFilter}>
          <option value="">all</option>
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

      <label htmlFor="horns">Horns:</label>
      <select id="horns" onChange={this.hornsFilter}>
        <option value="">any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">many</option>
      </select>

        <ImageList images={filteredData}/>


      </div>
    );
  }
}



