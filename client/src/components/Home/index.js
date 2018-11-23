import React, { Component } from 'react';
import NavBar from './NavBar';
import OptionBar from './OptionBar';
import Table from './Table';
import AddModal from './AddModal';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            username: '',
            parts: [],
            searchParts: [],
            filterParts: [],
            options: {
                location: 0,
                amount: -1
            }
        }
    }

    componentDidMount = () => {
        fetch('/profile')
        .then(res => res.json())
        .then(res => {
            this.setState({
                username: res.username
            })
        });
        fetch('/part')
        .then(res => res.json())
        .then(res => {
            let p = res.sort((a, b) => a.container_number - b.container_number);
            this.setState({parts: p, searchParts: p, filterParts: p});
        });
    }

    handleAddForm = (data) => {
        fetch('/part', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            let p = [...this.state.parts, res].sort((a, b) => a.container_number - b.container_number);
            this.setState({parts: p});
            this.search(this.state.searchTerm);
        });
    }

    search = (term) => {
        this.setState({searchTerm: term});
        if(term !== ''){
            let p = this.state.parts.filter(d => d.name.includes(term));
            this.setState({searchParts: p});
        }else{
            this.setState({searchParts: this.state.parts});
        }
        this.filter(this.state.options);
    }

    filter = (options) => {
        this.setState({options: options});
        console.log(options);
        if(options.location != 0){
            let p = this.state.searchParts.filter(d => d.location == options.location && d.amount == options.amount);
            this.setState({filterParts: p});
        }else{
            this.setState({filterParts: this.state.searchParts});
        }
    }

    render(){
        return (
            <div>
                <NavBar username={this.state.username} search={this.search}/>
                <OptionBar filter={this.filter}/>
                <AddModal handleAddForm = {this.handleAddForm}/>
                <Table parts={this.state.filterParts}/>
            </div>
        )
    }
}