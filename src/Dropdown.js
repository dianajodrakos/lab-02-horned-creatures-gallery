import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div className="filter">
            <label htmlFor={this.props.filter}>{this.props.label}</label>
            <select id={this.props.filter} onChange={this.props.handleChange}>
              <option disabled selected={true} value>all</option>
            { this.props.options.map((item, i) =>
            <option value={item} key={i}>{item}</option>
            )}
            </select>
          </div>
        )
    }
}
