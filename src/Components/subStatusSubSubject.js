import React, { Component } from 'react';
import SubCategoryList from './SubCategoryList';

//book categories class
class subStatusSubSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSubject: props.match.params.subject,
            subStatus: props.match.params.status,
            subcategories: []
        }
    }

    //first running function that handles the data execution and retrival
    componentWillMount() {
        const url = `https://targil1part1.herokuapp.com/subcategories/${this.state.subStatus}/${this.state.subSubject}`;
        fetch(url).then((res) => {
            return res.json();
        }).then((doc) => {
            console.log(doc)
            this.setState({ subcategories: [doc.subcategories] });
        })
    }

    //main render that returns all book categories
    render() {
        return (<div className='subcategories'>
            <SubCategoryList subcategories={this.state.subcategories} />
        </div>
        )
    }
}

export default subStatusSubSubject;