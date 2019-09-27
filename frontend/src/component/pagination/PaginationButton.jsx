import React, { Component } from "react";

export default class PaginationButton extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPageNumber) {
    this.props.onPageChange(newPageNumber);
  }

  render() {
    let text = this.props.text;
    let index = this.props.index;
    let pageNumber = this.props.pageNumber;
    let maxPages = this.props.maxPages;
    let id = this.props.id;

    return (
      <button
        id={id ? id : "pagination-button"}
        disabled={text && (index < 0 || index > maxPages - 1)}
        className={"btn btn-primary".concat(
          text ? "" : index === pageNumber ? " active" : ""
        )}
        onClick={() => this.changePage(index)}
      >
        {text
          ? text
          : index === pageNumber + 2 && maxPages - index > 2
          ? "..."
          : index}
      </button>
    );
  }
}
