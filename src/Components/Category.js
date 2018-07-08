import React, { Component } from 'react';
import BookCategory from './BookCategory';
import SubCategoryList from './SubCategoryList';

//handle each category

class Category extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            categoryname: props.cat.categoryname,
            categoryid: props.cat.categoryid,
            subcategories: [props.cat.subcategories]
        }
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    //update certain category from user
    update(newBookCategory, id) {
        console.log('updated: ' + id + ' to: ' + newBookCategory);
        this.setState({categoryname: newBookCategory})
    }

    //delete category
    delete() {
        console.log('sending this: ' + this.state.categoryid);
        this.props.onDelete(this.state.categoryid);
    }

    render() {
        return (
            <div className='bookCategories'>
                <div key={'container' + this.state.categoryid} className='card' style={{ width: 18 + 'rem', marginBottom: 7 + 'px' }}>
                    <div className='card-body'>
                        <BookCategory id={'categoryNumber' + this.state.categoryid} key={'bookcategory' + this.state.categoryid} index={this.state.categoryid} onChange={this.update} onDelete={this.delete}>
                            <h5 className='card-title'>Category Name: {this.state.categoryname}</h5>
                            <p>Category ID: {this.state.categoryid}</p>
                            <SubCategoryList subcategories={this.state.subcategories} />
                        </BookCategory>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;