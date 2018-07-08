import React, {Component} from 'react';
import CategoryList from './CategoryList';

//book categories class
class BookCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookCategories: [
            ]
        }
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }

    //first running function that handles the data execution and retrival
    componentWillMount() {
        const url = 'https://targil1part1.herokuapp.com/categories';
        fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                data.map((doc) => {
                    console.log('handeling this ' + doc.categoryname);
                    this.add(doc.categoryname, doc.categoryid, doc.subcategories);
                })
            })
    }

    //adding function - handles new category addition to local state data  - also handle retrived data from API
    add(_categoryname, _categoryid, _subcategories) {
        this.setState((prevState) => ({
            bookCategories: [
                ...prevState.bookCategories,                        //... -> handle each added doc in prevState
                {
                    categoryname: _categoryname,
                    categoryid: _categoryid,
                    subcategories: _subcategories
                }
            ]
        }));
    }

    delete(id) {
        console.log('delete at: ', id);
        this.setState((prevState) => ({
            bookCategories: prevState.bookCategories.filter(book => book.categoryid != id)
        }))
    }

    //main render that returns all book categories
    render() {
        return (
            <div className='bookCategories'>
                <CategoryList onDelete={this.delete} categories={this.state.bookCategories} />
            </div>
        )
    }
}

export default BookCategories;