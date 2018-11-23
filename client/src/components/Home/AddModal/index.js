import React, { Component } from 'react';

export default class AddModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            location: '',
            additional_info: '',
            container_number: 0,
            amount: 0
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddForm({ ...this.state });
    }

    handle = (event, field) => {
        this.setState({
            [field]: event.target.value
        });
    };

    render(){
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Name" onChange={e => this.handle(e, 'name')}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Location</label>
                                        <select className="custom-select" onChange={e => this.handle(e, 'location')}>
                                            <option value="1">North-West Warehouse</option>
                                            <option value="2">North Warehouse</option>
                                            <option value="3">North-South Warehouse</option>
                                            <option value="4">South Warehouse</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Additional Infomation</label>
                                    <textarea className="form-control" rows="3" onChange={e => this.handle(e, 'additional_info')}></textarea>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <label>Container Number</label>
                                    <input type="number" className="form-control" min="0" onChange={e => this.handle(e, 'container_number')}/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Amount</label>
                                        <input type="number" className="form-control" min="0" onChange={e => this.handle(e, 'amount')}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                        <label className="form-check-label">
                                            Smart Search
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}