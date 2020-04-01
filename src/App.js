import React , {Component} from 'react'
import CreateEvent from './CreateEvent'
import SearchBar from './SearchBar'
import DisplayEvents from './DisplayEvents'
import events from './data'
import './style.css'

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            events,
            sortEvents: []
        }
    }

    // filterEvents = (e) => {
    //     e.preventDefault()
    //     let eventsCopy = this.state.events
    //         eventsCopy.filter(event => {
    //            if (e.target[0].value === "name") {
    //                 if (event.name == e.target[1].value){
    //                     return events
    //                 }
    //            } else if (e.target[0].value === "date") {
    //                    return events if event.date == e.target[1].value
    //            } else (e.target[0].value === "time") {
    //                  return events if event.time == e.target[1].value
    //            }
    //         })
    // }

    addEvent = (e) => {
        e.preventDefault()
        let newEvent = {
            name: e.target[0].value,
            description: e.target[1].value,
            date: e.target[2].value,
            time: e.target[3].value,
        }

        this.setState({
            events: [...this.state.events,newEvent]
        })
        e.target.reset()
    }

    render() {
        return(
        <div>
            <div>
                <h1>EventFinder</h1>
            </div>
            <div className="create_event">
                <CreateEvent addEvent={this.addEvent}/> 
            </div>
            <div className="event_container">
                <SearchBar /> 
                <DisplayEvents events={this.state.events}/> 
            </div>
        </div>
        )
    }
}
