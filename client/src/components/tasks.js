import React, { Component } from 'react';
import Axios from 'axios';
import Filters from "./filters";
import TaskEdit from './taskedit';


class Tasks extends Component{
    constructor(props){
        super(props);
        this.state = {
            theTasks: [],
            id:'',
            completed: '',
            priority: ''
        }
        // Get all tasks
        this.findThemAll = this.findThemAll.bind(this)
        this.handleSubmit =
        // Submit new task
        this.handleSubmit.bind(this)
        this.taskCompleted =
        // Update a completed task state
        this.taskCompleted.bind(this)
        // Delete a task
        this.taskDelete = this.taskDelete.bind(this)
        // FILTERS FUNCTIONS
        // PRIORITY
        // main
        this.filterPriority = this.filterPriority.bind(this)
        // low
        this.filterPrioLow = this.filterPrioLow.bind(this)
        // meduim
        this.filterPrioMed = this.filterPrioMed.bind(this)
        // urgent
        this.filterPrioUrg = this.filterPrioUrg.bind(this)
        // COMPLETED
        this.filterCompleted = this.filterCompleted.bind(this)
        this.filterUnCompleted = this.filterUnCompleted.bind(this)
        
    }
    state = {
        response: '',
    };
    componentWillMount(){
      Axios.get('/api/to-do')
        .then(response => this.setState({
          theTasks: response.data
        }));
      console.log(this.state.theTasks);
    }
    componentDidMount() {
        this.callApi()
        .then(res => this.setState({response: res.express }))
        .catch(err => console.log(err + ' Error...'));
    }
    callApi = async() => {
        const response = await fetch('/api/to-do');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };
    handleSubmit(eHandle){
        eHandle.preventDefault();
        var { theTasks } = this.state;
        var id = this.input.value;
        
        console.log(id + ' This is in React');

        if ( id === null || id === undefined || id === '' ){
            alert('The Task id is required....');
        } else { 
            Axios.get("/api/to-do/?id=" + this.input.value)
            .then(response => this.setState({
                theTasks: response.data
            }))
            console.log(theTasks);
        }
    }; 
    taskCompleted(eCompleted, err){
      var checked = eCompleted.target.checked;
      this.setState({ id: eCompleted.target.id }, () => {
        var id = this.state.id;
        Axios.put("/api/to-do/" + id, {
          completed: checked
        }).catch(err);
      });
    }
    taskDelete(eDelete){
      this.setState({ id: eDelete.target.id }, () => {
        var id = this.state.id;
        // console.log(id);
        Axios.delete('/api/to-do/' + id);
        this.componentWillMount();
      })
    }
    findThemAll() {
        Axios.get('/api/to-do')
            .then(response => this.setState({
                theTasks: response.data
            }))
    }
    filterPriority(){
      var priority = this.state.priority;
      Axios.get('/api/to-do?arg=' + priority)
        .then(response => this.setState({
          theTasks: response.data
        }))
    }
    filterPrioLow(){
      this.setState({priority: 'low'}, () => {
        this.filterPriority();
      })
    }
    filterPrioMed(){
      this.setState({ priority: 'medium' }, () => {
        this.filterPriority();
      })
    }
    filterPrioUrg(){
      this.setState({ priority: 'urgent' }, () => {
        this.filterPriority();
      })
    }
    filterCompleted(){
      Axios.get('/api/to-do?arg=true')
        .then(response => this.setState({
          theTasks: response.data
        }))
    }
    filterUnCompleted(){
      Axios.get("/api/to-do?arg=false").then(response =>
        this.setState({
          theTasks: response.data
        })
      );
    }
    render() {
        var { theTasks } = this.state;

        return <div id="task-container">
            <Filters
              thePriority = {this.state.priority}
              findThemAll = {this.findThemAll} 
              filterPrioLow = {this.filterPrioLow}
              filterPrioMed = {this.filterPrioMed}
              filterPrioUrg = {this.filterPrioUrg}
              filterCompleted = {this.filterCompleted}
              filterUnCompleted = {this.filterUnCompleted}
            />
            
            <h1>Tasks:</h1>
            <section>
              {theTasks.map(task => (
                <div key={task._id} className="task-results">
                  <div>
                    <div className="row no-gutters">
                      <div
                        className="col-1"
                        data-toggle="collapse"
                        data-target={"#id" + task._id}
                        aria-controls={task._id}
                      >
                        <i className="fas fa-plus" />
                      </div>
                      <div className="col-5">
                        <p>{task.title}</p>
                      </div>
                      <div className="col-4">
                        <p>{task.priority}</p>
                      </div>
                      <div className="col-1">
                        <TaskEdit theId = {task._id} />
                      </div>
                      <div className="col-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          defaultChecked={task.completed}
                          id={task._id}
                          onClick={this.taskCompleted}
                        />
                      </div>
                    </div>
                    <div
                      id={"id" + task._id}
                      className="collapse row no-gutters"
                    >
                      <div className="col">
                        <p className="text-justify">
                          {task.description}
                        </p>
                      </div>
                      <div className="col-2">
                        <button
                          type="button"
                          onClick={this.taskDelete}
                          className="btn btn-sm btn-danger"
                          id={task._id}
                        >
                          <i
                            className="far fa-trash-alt"
                            id={task._id}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>;};
}
export default Tasks;