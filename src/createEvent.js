import React , {Component} from 'react'

export default class CreateEvent extends Component{


  render(){
      return (
          <div>
            <form onSubmit={(e) => this.props.addEvent(e)}>
              <h3>Create New Event</h3><br/>
              <label>Event Name:</label>
              <input type="text" placeholder="enter name of event"/>
              <br/>
              <label>Description:</label>
              <input type="text" placeholder="enter description of event"/>
              <br/>
              <label>Date:</label>
              <input type="text" placeholder="enter date of event"/>
              <br/>
              <label>Time:</label>
              <input type="text" placeholder="enter time of event"/>
              <br/>
              <input type="submit" value="Create"/>
            </form>
          </div>
      )
  }
}