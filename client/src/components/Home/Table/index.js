import React from 'react';

import './index.css';

export default function(props){
    function renderTable(){
        return props.parts.map(d => {
            let {_id, name, additional_info, container_number, amount} = d;
            return (
                <tr key={_id}>
                    <th scope="row">{container_number}</th>
                    <td>{name}</td>
                    <td>{additional_info}</td>
                    <td>{amount}</td>
                </tr>
            );
        });
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Addition Information</th>
                    <th scope="col">Kpl</th>
                </tr>
            </thead>
            <tbody>
                {renderTable()}
            </tbody>
        </table>
    );
}