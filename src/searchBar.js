import React , {Component} from 'react'

export default class SearchBar extends Component{
    render(){
        return (
            <div>
                <input type="text" id="seach_bar"/>
                <button className="btn">Seach</button>
            </div>
        )
    }
}