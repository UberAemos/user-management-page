import React, { Component } from 'react'
import PaginationButton from './PaginationButton'

export default class PaginationButtons extends Component {
    constructor(props) {
        super(props)

        this.changePage = this.changePage.bind(this)
    }

    changePage(pageNumber) {
        this.props.onPageChange(pageNumber)
    }

    render() {
        let pageNumber = this.props.pageNumber
        let maxPages = this.props.maxPages
        const buttons = []

        if (maxPages < 4)
            for (let i = 0; i < maxPages; i++) {
                buttons.push(
                    <PaginationButton 
                        onPageChange={this.changePage} 
                        index={i} 
                        pageNumber={pageNumber} 
                        maxPages={maxPages}/>
                )
            }
        else if (maxPages - pageNumber > 4) {
            for (let i = 0; i < 3; i++) {
                buttons.push(
                    <PaginationButton 
                        onPageChange={this.changePage} 
                        index={pageNumber + i} 
                        pageNumber={pageNumber} 
                        maxPages={maxPages}/>
                )
            }
            buttons.push(
                <PaginationButton 
                    onPageChange={this.changePage} 
                    index={maxPages-1} 
                    pageNumber={pageNumber} 
                    maxPages={maxPages}/>
            )
        }
        else
        for (let i = maxPages-4; i < maxPages; i++) {
            buttons.push(
                <PaginationButton 
                    onPageChange={this.changePage} 
                    index={i} 
                    pageNumber={pageNumber} 
                    maxPages={maxPages}/>
            )
        }
        return (
            <div className="btn-group">
                <PaginationButton id="first-button" text="İlk" index={0} onPageChange={this.changePage}/>
                <PaginationButton id="prev-button" text="Geri" index={pageNumber - 1} onPageChange={this.changePage}/>
                {buttons}
                <PaginationButton id="next-button" text="İleri" index={pageNumber + 1} onPageChange={this.changePage} maxPages={maxPages}/>
                <PaginationButton id="last-button" text="Son" index={maxPages - 1} onPageChange={this.changePage}/>
            </div>
        )
    }
}
