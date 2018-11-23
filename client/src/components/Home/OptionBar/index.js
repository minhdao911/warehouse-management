import React, { Component } from 'react';

import './index.css';

export default class OptionBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterClick: false,
            location: 0,
            amount: -1    
        }
    }

    handleFilterClick = () => {
        this.setState({filterClick: !this.state.filterClick});
    }

    handleChange = (e, field) => {
        this.setState({[field]: e.target.value});
    }

    handleFilter = (e) => {
        e.preventDefault();
        let {location, amount} = this.state;
        if(location != 0 && amount !=-1)
            this.props.filter({location, amount});
    }

    handleClearFilter = (e) => {
        e.preventDefault();
        this.setState({location: 0, amount: -1});
        this.props.filter({location: 0, amount: -1});
    }

    render(){
        return(
           <div className="option">
                <div className="option-container">
                    <p onClick={this.handleFilterClick}>Filter</p>
                    <button className="btn btn-success" data-toggle="modal" data-target="#exampleModal">Add new spare part</button>
                </div>
                {this.state.filterClick ? 
                <form>
                    <hr></hr>
                    <div className="filter">
                        <div className="field">
                            <p>Location: </p>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="loc" 
                                    value="1" 
                                    onChange={e => this.handleChange(e, 'location')} 
                                    checked={this.state.location == 1} 
                                    required/>
                                <label className="form-check-label">
                                    North-West Warehouse
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="loc" 
                                    value="2" 
                                    onChange={e => this.handleChange(e, 'location')}
                                    checked={this.state.location == 2}/>
                                <label className="form-check-label">
                                    North Warehouse
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="loc" 
                                    value="3" 
                                    onChange={e => this.handleChange(e, 'location')}
                                    checked={this.state.location == 3}/>
                                <label className="form-check-label">
                                    North-South Warehouse
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="loc" 
                                    value="4" 
                                    onChange={e => this.handleChange(e, 'location')}
                                    checked={this.state.location == 4}/>
                                <label className="form-check-label">
                                    South Warehouse
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <p>Amount: </p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Amount</span>
                                </div>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default" 
                                    value={this.state.amount}
                                    onChange={e => this.handleChange(e, 'amount')}
                                    required/>
                            </div>
                            <button className="btn btn-primary mr-2" onClick={this.handleFilter}>Filter</button>
                            <button className="btn btn-primary" onClick={this.handleClearFilter}>Clear Filter</button>
                        </div>
                    </div>
                </form>
                : null }
           </div> 
        );
    }
}