import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.url} alt={this.props.keyword}/>
                <div className ="card-text">
                    <h2 className="shiny1">{this.props.title}</h2>
                    <h6>Number of Horns: <span className="shiny1">{this.props.horns}</span></h6>
                    <h6>Type: <span className="shiny2">{this.props.keyword}</span></h6>
                    <p>🦄 {this.props.desc}</p>
                </div>
            </div>
        )
    }
}

