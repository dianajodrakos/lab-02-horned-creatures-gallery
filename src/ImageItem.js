import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.url} alt={this.props.keyword}/>
                <h2>{this.props.title}</h2>
                <h3>Number of Horns: {this.props.horns}</h3>
                <p><span className="u">🦄</span> {this.props.desc}</p>

            </div>
        )
    }
}

//keyword description horns