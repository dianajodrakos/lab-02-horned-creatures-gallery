import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


//url title keyword description horns

export default class ImageList extends Component {
    render() {
        return (
            <div className="list">
                { this.props.images.map((item, i) => 
                <ImageItem 
                url={item.url} 
                title={item.title} 
                keyword={item.keyword} 
                desc={item.description} 
                horns={item.horns} 
                key={i}
                />)}
            </div>
        )
    }
}
