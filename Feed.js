import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton.js';
import FeedForm from './FeedForm.js';
import FeedList from './FeedList.js';
import _ from 'lodash';

class Feed extends React.Component{
    constructor(props) {
        super(props);
        this.onNewItem = this.onNewItem.bind(this);
        this.onVote = this.onVote.bind(this);

        this.state = {
			items: [
                    {key:'1', title: 'hiii there', description: 'asd asldk aksjdl jaskl jklja slkj', voteCount: 49},
                    {key:'2', title: '222 there', description: '2222 asldk aksjdl jaskl jklja slkj', voteCount: 2},
                    {key:'3', title: '333 there', description: '33333 asldk aksjdl jaskl jklja slkj', voteCount: 43}
                    ],
            formDisplayed: true
        };
    }

    onToggleForm() {
        this.setState({
            items:this.state.items,
            formDisplayed: !this.state.formDisplayed
        });
    }

    onNewItem(newItem) {
        newItem.key = this.state.items.length+1;
         var newItems = this.state.items.concat([newItem]);
        this.setState({
            items: newItems,
            formDisplayed:false,
            key: this.state.items.length
        });
    }

    onVote(item) {
        var items = _.uniq(this.state.items);
                var index = _.findIndex(items, function (feedItems) {
                        return feedItems.key === item.key;
                    });
                console.log(index);
                var oldObject = items[index];
                var newItems = _.pull(items, oldObject);
                newItems.push(item);
                newItems =  _.orderBy(newItems, ['voteCount'], ['desc']);
                this.setState({
                        items: newItems
                });
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
