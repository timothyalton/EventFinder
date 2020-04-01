import React , {Component} from 'react'

export default class Events extends Component{
    constructor(props) {
        super()
        this.state ={
            name: props.event.name,
            description: props.event.description,
            date: props.event.date,
            time: props.event.time
        }
    }
    render(){
        return (
            <div>
                <h3>{this.state.name}</h3>
                <p>{this.state.description}</p>
                <p>{this.state.date}-{this.state.time}</p>
            </div>
        )
    }
}