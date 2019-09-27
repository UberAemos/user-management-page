import React, { Component } from "react";
import UserService from "../api/UserService";
import UsersTable from "./UsersTable";
import PaginationButtons from "./pagination/PaginationButtons";
import DeleteUserPanel from "./modal/DeleteUserModalDialog";
import UpdateUserPanel from "./modal/UpdateUserModalDialog";
import CreateUserPanel from "./modal/CreateUserModalDialog";

export default class UserManagementPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: "",
      maxPages: "",
      pageNumber: "",
      userToBeUpdated: "",
      userToBeDeleted: "",
      addUser: false
    };

    this.changePage = this.changePage.bind(this);
    this.updateUserClicked = this.updateUserClicked.bind(this);
    this.deleteUserClicked = this.deleteUserClicked.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers(0).then(response => {
      this.setState({
        users: response.data.users,
        pageNumber: response.data.pageNumber,
        maxPages: response.data.maxPages
      });
    });
  }

  changePage(pageNumber) {
    UserService.getUsers(pageNumber).then(response => {
      this.setState({
        users: response.data.users,
        pageNumber: response.data.pageNumber,
        maxPages: response.data.maxPages
      });
    });
  }

  updateUserClicked(user) {
    this.setState({
      userToBeUpdated: user
    });
  }

  deleteUserClicked(user) {
    this.setState({
      userToBeDeleted: user
    });
  }

  addUser(user) {
    UserService.addUser(user).then(response => {
      this.setState({
        users: response.data.users,
        pageNumber: response.data.pageNumber,
        maxPages: response.data.maxPages,
        addUser: false
      });
    });
  }

  deleteUser() {
    UserService.deleteUser(
      this.state.userToBeDeleted.id,
      this.state.pageNumber
    ).then(response => {
      this.setState({
        users: response.data.users,
        pageNumber: response.data.pageNumber,
        maxPages: response.data.maxPages,
        userToBeDeleted: ""
      });
    });
  }

  updateUser(user) {
    UserService.updateUser(user, this.state.pageNumber).then(response => {
      this.setState({
        users: response.data.users,
        pageNumber: response.data.pageNumber,
        maxPages: response.data.maxPages,
        userToBeUpdated: ""
      });
    });
  }

  render() {
    return (
      <main className="bg-light p-4 h-100 w-100 d-flex flex-column align-items-center">
        {this.state.userToBeDeleted && (
          <DeleteUserPanel
            user={this.state.userToBeDeleted}
            onDelete={this.deleteUser}
            onCancel={() =>
              this.setState({
                userToBeDeleted: ""
              })
            }
          />
        )}

        {this.state.userToBeUpdated && (
          <UpdateUserPanel
            user={this.state.userToBeUpdated}
            onUpdate={this.updateUser}
            onCancel={() =>
              this.setState({
                userToBeUpdated: ""
              })
            }
          />
        )}

        {this.state.addUser && (
          <CreateUserPanel
            onAdd={this.addUser}
            onCancel={() =>
              this.setState({
                addUser: false
              })
            }
          />
        )}

        <div className="d-flex flex-row w-100 justify-content-between mb-2">
          <h3>Kullanıcılar</h3>
          <button
            className="btn btn-sm btn-success"
            onClick={() =>
              this.setState({
                addUser: true
              })
            }
          >
            Yeni Kayıt
          </button>
        </div>

        {this.state.users && (
          <UsersTable
            className="d-flex flex-column w-100"
            users={this.state.users}
            onPageChange={this.changePage}
            onUpdateUserClick={this.updateUserClicked}
            onDeleteUserClick={this.deleteUserClicked}
          />
        )}
        {this.state.maxPages && this.state.maxPages > 1 && (
          <PaginationButtons
            pageNumber={this.state.pageNumber}
            maxPages={this.state.maxPages}
            onPageChange={this.changePage}
          />
        )}
      </main>
    );
  }
}
