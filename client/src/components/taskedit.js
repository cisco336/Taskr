import React, { Component } from "react";

class TaskEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:''
        }
        this.taskEdit = this.taskEdit.bind(this)
    }
    taskEdit(eEdit, err) {
        this.setState({ id: this.props.theId}, () => {
            var idEdit = this.state.id;
            console.log(idEdit);
            return idEdit;
        })
    }
    render(){
        console.log(id);
        return <div>
            <div className="col-1" id="{task._id}">
              <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#modalEditTask" onClick={this.taskEdit}>
                <i className="far fa-edit" id="{task._id}"></i>
              </button>
            </div>
            {/* Modal */}
            <div className="modal fade" id="modalEditTask">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <h5 className="modal-header">Add New Task:</h5> {/*modal header*/}
                  <div className="modal-body">
                    <form>
                        <div>{id}</div>
                    </form>
                  </div> {/*modal body*/}
                </div> {/*modal content*/}
              </div> {/*modal hdialog*/}
            </div> {/*modal*/}
          </div>;
    }
}

export default TaskEdit;