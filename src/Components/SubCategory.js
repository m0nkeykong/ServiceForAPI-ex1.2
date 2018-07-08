import React, { Component } from 'react';

//handle each category
class SubCategory extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            subcategories: props.subcat
        }
        this.eachSubCategory = this.eachSubCategory.bind(this);
    }

    eachSubCategory(SubCategory, i) {
        return (
            <article key={'SubCategory' + i} index={i}>
                <ul>
                    <li>ID: {SubCategory.id}</li>
                    <li>Subject: {SubCategory.subject}</li>
                    <li>Status: {SubCategory.status}</li>
                    <li>Number Of Books: {SubCategory.numberofbooks}</li>
                </ul>
            </article>
        )
    }

    render() {
        return (
            <article className="subcat">
                Sub Categories: {this.state.subcategories.map(this.eachSubCategory)} 
            </article>

        )
    }
}

export default SubCategory;