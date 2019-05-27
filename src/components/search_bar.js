import React, { Component } from 'react';

class SearchBar extends Component {
    
    constructor(props){
        super(props)

        this.state = { term: 'Chernobyl' };
    }

    render(){
        return ( 
            <div className="search-bar">
                <input value = {this.state.term}
                onKeyDown = {(event) => {
                    if (event.key === 'Enter')
                        this.onEnterPress(event.target.value)
                }}
                onChange = {(event) => this.setState({term: event.target.value})}
                />
            </div>
        )
    }

    onEnterPress(term){
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;