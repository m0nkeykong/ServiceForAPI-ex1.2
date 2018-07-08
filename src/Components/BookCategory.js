import React, {Component} from 'react'  
import './BookCategory.css'
import ReactDOM from 'react-dom';
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'
import MdEdit from 'react-icons/lib/md/edit'

//main book category class
class BookCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderUI = this.renderUI.bind(this);
    }

    //edit value of category
    edit() {
        this.setState({
            editing: true
        });
    }

    //delete category
    delete() {
        this.props.onDelete();
    }

    //save changes made for category
    save(e) {
        e.preventDefault();
        console.log(this.props.index);
        this.props.onChange(this.newBookCategory.value, this.props.index);
        this.setState({
            editing: false
        });
    }

    //render to send the editing window
    renderForm() {
        return(
            <div>
                <form onSubmit={this.save}>
                    <textarea ref={input => this.newBookCategory = input}></textarea>
                    <button onClick={this.save}><MdSave/></button>
                </form>
            </div>
        );
    }

    //render to send to user interface
    renderUI() {
        return (
            <div className='bookCategory'>
                {this.props.children}
                <span>
                    <button onClick={this.edit}><MdEdit/></button>
                    <button onClick={this.delete}><MdDelete/></button>
                </span>
            </div>
        )
    }

    //main render - checks if editing mode is enabled/disabled and returns the appropriate content
    render() {
        return this.state.editing ? this.renderForm() : this.renderUI();
    }
}

export default BookCategory;