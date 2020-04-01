import React , {Component} from 'react'
import CreateEvent from './CreateEvent'
import SearchBar from './SearchBar'
import DisplayEvents from './DisplayEvents'


export default class App extends Component{
  
    render() {
        return (
            
            <div className="App">
                
                <div>
                    <h1>EventFinder</h1>
                </div>

                <div>
                    <CreateEvent />
                </div>

                <div>
                    <SearchBar />
                </div>

                <div>
                    <DisplayEvents />
                </div>

            </div>
        )
    }
}
