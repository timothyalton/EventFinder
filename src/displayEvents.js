import React , {Component} from 'react'
import Event from './Event'

export default class DisplayEvents extends Component{

    addEvent = () => {
       return this.props.events.map(event => <Event event={event}/>)
    }
    render(){
        return (
            <div>
                {this.addEvent()}
            </div>
        )
    }
}