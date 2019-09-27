import React, { Component } from "react";

export default class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.updateUserClicked = this.updateUserClicked.bind(this);
    this.deleteUserClicked = this.deleteUserClicked.bind(this);
  }

  updateUserClicked(user) {
    this.props.onUpdateUserClick(user);
  }

  deleteUserClicked(user) {
    this.props.onDeleteUserClick(user);
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
              <td>{user.phone ? user.phone : "<belirtilmemiş>"}</td>
              <td>
                <div className="d-flex flex-row justify-content-end">
                  <button
                    id="update-button"
                    className="btn btn-sm btn-warning"
                    onClick={() => this.updateUserClicked(user)}
                  >
                    Güncelle
                  </button>
                  <button
                    id="delete-button"
                    className="btn btn-sm btn-danger"
                    onClick={() => this.deleteUserClicked(user)}
                  >
                    Sil
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
