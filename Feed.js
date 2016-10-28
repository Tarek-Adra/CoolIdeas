import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton.js';
import FeedForm from './FeedForm.js';
import FeedList from './FeedList.js';

class Feed extends React.Component{

	 

    constructor(props) {
        super(props);
        this.state = {
			items: [
	{key:'1', title: 'hiii there', description: 'asd asldk aksjdl jaskl jklja slkj', voteCount: 49},
	{key:'2', title: '222 there', description: '2222 asldk aksjdl jaskl jklja slkj', voteCount: 2},
	{key:'3', title: '333 there', description: '33333 asldk aksjdl jaskl jklja slkj', voteCount: 43}
	],
            formDisplayed: false
        };
    }


    onToggleForm() {
        console.log(this.state.formDisplayed);
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    }

    onNewItem(newItem) {
        console.log(newItem);
        console.log(this);
         var newItems = this.state.items.concat([newItem]);
        this.setState({
            items: newItems,
            formDisplayed:false,
            key: this.state.items.length
        });
    }

    onVote(item) {
         console.log('on Vote ');
        console.log(item);
    }

    render(){
        return (
            <div>
                <div className="container">
                   <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm.bind(this)} />
                </div>


                <FeedForm  displayed={this.state.formDisplayed}   onNewItem={this.onNewItem}  />
                <br/>
                <br/>

			   <FeedList items={this.state.items}  onVote={this.onVote} />
            </div>
        );
    }
}

export default Feed;
