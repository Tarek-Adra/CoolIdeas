import React, { Component } from 'react';

class FeedForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {title: '', desc: ''};
        this.titleChange = this.titleChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }


    titleChange(e){
        this.setState({title: e.target.value})
    }

    descChange(e){
        this.setState({desc: e.target.value})
    }

    handleForm(e) {
        console.log('Handle Function',  this.state.title);

        var newItem = {
            title:  this.state.title,
            description:  this.state.desc,
            voteCount: 0
        };
        
        this.props.onNewItem(newItem);
    }


    clearForm() {
            this.setState({
                title: "",
                desc: ""
            });
        }

    render(){
        var display = this.props.displayed ? 'block' : 'none';
        var styles = {
            display: display
        };
        return (
            <div ref="feedForm" style={styles} id="feedForm" className="container" >
                <div className="form-group">
                    <input onChange={this.titleChange} type="text" className="form-control" placeholder="Title" />
                    <input onChange={this.descChange} type="text" className="form-control" placeholder="Description" />
                    <button type="button" className="btn btn-primary btn-block" onClick={this.handleForm}>Add</button>
                </div>
            </div>
        );
    }
}

export default FeedForm;
