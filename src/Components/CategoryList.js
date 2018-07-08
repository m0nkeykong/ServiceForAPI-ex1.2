import React, { Component } from 'react';
import Category from './Category';


class CategoryList extends Component {
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete(id){
        this.props.onDelete(id);
    }

    render(){
        return(
            <div className="col-12">
                <ul className="list-inline">
                    {this.props.categories && this.props.categories.map((item, index) => (
                      <li className="col-3 list-inline-item" key={index}> <Category onDelete={this.delete} cat={item} /> </li>
                    ))}
                </ul>
            </div>
        )
    }
}

//categories && ---> check if exists something in categories
export default CategoryList;
