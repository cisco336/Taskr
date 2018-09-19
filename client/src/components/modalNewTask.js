import React, { Component } from 'react';
import Axios from 'axios';

class ModalNewTask extends Component {
    constructor(props){
        super(props);
        {/*this.state{};*/}
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event, err){
        // event.preventDefault();

        var title = this.input.value;
        var description = this.textarea.value;
        var priority = this.select.value;
        if (title === '') { alert('Title is required'); return }
        Axios.post("/api/to-do?title=", {
            title: title,
            description: description,
            priority: priority,
            completed: false
        }).catch(err);
        
    }
    render(){
        return <div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="inputTitle">Title:</label>
                <input type="text" className="form-control" id="inputTitle" aria-describedby="titleHelp" placeholder="Enter task title" ref={inputTitle => this.input = inputTitle}/>
              </div>
              <div className="form-group">
                <label htmlFor="taskDescription">Task description:</label>
                <textarea className="form-control" id="taskDescription" rows="3" ref={taskDescription => this.textarea = taskDescription}/>
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority:</label>
                <select className="form-control" id="priority" ref={priority => this.select = priority}>
                  <option>low</option>
                  <option>medium</option>
                  <option>urgent</option>
                </select>
              </div>
              <input className="btn btn-primary" type="submit" value="Submit" />
              <button type="button" className="btn btn-secondary ml-3" data-dismiss="modal">
                Close
              </button>
            </form>
          </div>;
    }
}

export default ModalNewTask;
