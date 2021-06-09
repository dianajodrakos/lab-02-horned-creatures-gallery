import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from "./ImageList.js";
import data from './data.js';

export default class App extends Component {

  state = {
    keyword: '',
    horns: '',
    title: '',
  }

  keywordFilter = (e) => {
    this.setState({ keyword: e.target.value });
  }
  
  hornsFilter = (e) => {
    this.setState({ horns: Number(e.target.value) });
  }

  titleFilter = (e) => {
    this.setState({ title: e.target.value });
  }
  
  resetFilter = (e) => {
    this.setState({
      keyword: '',
      horns: '',
      title: '',
    })
  }

  render() {
    let filteredData = data.slice();

    if (this.state.keyword) {
      filteredData = filteredData.filter(item => item.keyword === this.state.keyword);
    }  
    if (this.state.horns) {
      filteredData = filteredData.filter(item => item.horns === this.state.horns);
    } 
    if (this.state.title) {
      filteredData = filteredData.filter(item => item.title === this.state.title);
    }

    let filteredKeywords = [];
  
  for (let item of filteredData) {
    if (!filteredKeywords.includes(item.keyword)) {
      filteredKeywords.push(item.keyword)
    }
  }

    let filteredHorns = [];
  
  for (let item of filteredData) {
    if (!filteredHorns.includes(item.horns)) {
      filteredHorns.push(item.horns)
    }
  }

  let filteredTitles = [];

  for (let item of filteredData) {
    if (!filteredTitles.includes(item.title)) {
      filteredTitles.push(item.title)
    }
  }

    return (
      <div className="App">
        <Header />
        <section>
          <div className="filter">
            <label htmlFor="keyword">Creature Type:</label>
            <select id="keyword" onChange={this.keywordFilter}>
              <option disabled selected value>all</option>
            { filteredKeywords.map((item, i) =>
            <option value={item} key={i}>{item}</option>
            )}
            </select>
          </div>

          <div className="filter">
            <label htmlFor="horns">Number of Horns:</label>
            <select id="horns" onChange={this.hornsFilter}>
            <option disabled selected value>all</option>
              { filteredHorns.map((item, i) =>
              <option value={item} key={i}>{item}</option>
              )}
            </select>
          </div>

          <div className="filter">
            <label htmlFor="title">Creature Title:</label>
            <select id="title" onChange={this.titleFilter}>
              <option disabled selected value>all</option>
              { filteredTitles.map((item, i) =>
              <option value={item} key={i}>{item}</option>
              )}
            </select>
          </div>

          <button onClick={this.resetFilter}>Reset Filters</button>

        </section>
        <ImageList images={filteredData}/>


      </div>
    );
  }
}



