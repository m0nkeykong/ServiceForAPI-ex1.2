import React, { Component } from 'react';
import CategoryList from './CategoryList';

//book categories class
class CategoryByID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: props.match.params.id,
            bookCategories: []
        }
        this.delete = this.delete.bind(this);
    }

    //first running function that handles the data execution and retrival
    componentWillMount() {
        const url = `https://targil1part1.herokuapp.com/categories/${this.state.categoryId}`;
        fetch(url).then((res) => {
            return res.json();
        }).then((doc) => {
            console.log(doc);
            this.setState({bookCategories:[doc]});
        })
    }

    delete(){
        this.setState({bookCategories: null});
    }
    //main render that returns all book categories
    render() {
        return (<div className='bookCategories'>
            <CategoryList onDelete={this.delete} categories={this.state.bookCategories} />
        </div>
        )
    }
}

export default CategoryByID;