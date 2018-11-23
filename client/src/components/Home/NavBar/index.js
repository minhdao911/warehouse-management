import React, { Component } from 'react';

import './index.css';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    handleChange = (e) => {
        this.setState({term: e.target.value});
        this.props.search(e.target.value);
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.search(this.state.term);
    }

    render(){
        return (
            <div className="nav">
                <nav className="navbar">
                    <form className="form-inline" onSubmit={this.handleSearch}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Type name of spare part" onChange={e => this.handleChange(e)}/>
                        <button className="btn my-2 my-sm-0" onClick={this.handleSearch}>Search</button>
                    </form>
                    <span className="navbar-text">
                        {this.props.username}
                    </span>
                </nav>
            </div>
        );
    }
}