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

    let searchFilterArray = [ 
      { filter: 'keyword',
        label: 'Creature Type:',
        handler: this.keywordFilter,
        options: filteredKeywords,
    }, 
      { filter: 'horns',
        label: 'Number of Horns:',
        handler: this.hornsFilter,
        options: filteredHorns,
    }, 
      { filter: 'title',
        label: 'Creature Title:',
        handler: this.titleFilter,
        options: filteredTitles,
    }, 
  ]

    return (
      <div className="App">
        <Header data={searchFilterArray} reset={this.resetFilter}/>
        <ImageList images={filteredData}/>


      </div>
    );
  }
}



