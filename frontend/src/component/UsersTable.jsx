import React, { Component } from 'react'

export default class UsersTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <table className="table table-borderless bg-white">
                <thead>
                    <tr>
            		    <th>Ad</th>
                	    <th>Soyad</th>
                        <th>Telefon</th>
                        <th></th>
				    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.phone}</td>
                            <td>
                    	        <div className="d-flex flex-row justify-content-end">
                    		        <button className="btn btn-sm btn-warning">Güncelle</button>
							        <button className="btn btn-sm btn-danger">Sil</button>
        	                    </div>
					        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
