import React, { Component } from 'react'
import UserService from "../api/UserService";
import UsersTable from './UsersTable';
import PaginationButtons from './PaginationButtons'

export default class UserManagementPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: "",
            maxPages: "",
            pageNumber: ""
        }

        this.changePage = this.changePage.bind(this)
    }

    componentDidMount() {
        UserService.getUsers(0)
            .then(response => {
                this.setState({
                    users: response.data.users,
                    pageNumber: response.data.pageNumber,
                    maxPages: response.data.maxPages
                })
            }
        )
    }

    changePage(pageNumber) {
        UserService.getUsers(pageNumber)
            .then(response => {
                this.setState({
                    users: response.data.users,
                    pageNumber: response.data.pageNumber,
                    maxPages: response.data.maxPages
                })
            }
        )
    }

    render() {
        return (
            <main className="bg-light p-4 h-100 w-100 d-flex flex-column align-items-center">
                <div className="d-flex flex-row w-100 justify-content-between mb-2">
                    <h3>Kullanıcılar</h3>
                    <button className="btn btn-sm btn-success">
                        Yeni Kayıt
                    </button>
                </div>
                {(this.state.users) &&
                    <UsersTable 
                        className="d-flex flex-column w-100" 
                        users={this.state.users} 
                        onPageChange={this.changePage}/>
                }
                {(this.state.maxPages && this.state.maxPages>1) &&
                    <PaginationButtons 
                        pageNumber={this.state.pageNumber} 
                        maxPages={this.state.maxPages}
                        onPageChange={this.changePage} />
                } 
            </main>
        )
    }
}