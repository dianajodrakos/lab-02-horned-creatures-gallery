import React, { Component } from 'react'
import Dropdown from './Dropdown.js';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>An incomplete database of horned creatures</h1>

                <section>
                    { this.props.data.map((item, i) =>
                    <Dropdown 
                    filter={item.filter} 
                    label={item.label} 
                    handleChange={item.handler}
                    options={item.options} 
                    key={i}/>
                    )}
                    <button onClick={this.props.reset}><p className="button">Reset Filters</p></button>
                </section>
            </div>
        )
    }
}
