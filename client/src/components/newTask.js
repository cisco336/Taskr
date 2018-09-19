import React, { Component } from 'react';
import ModalNewTask from './modalNewTask';

class NewTask extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="newTask-wrapper">
            <button className="newTask-button" data-target="#modalNewTask" data-toggle="modal">
              <i className="fas fa-plus" />
            </button>
            <div className="modal fade" id="modalNewTask">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <h5 className="modal-header">
                    Add New Task:
                  </h5> {/*modal header*/}
                  <div className="modal-body">
                    <ModalNewTask />
                    
                  </div> {/*modal body*/}
                </div> {/*modal content*/}
              </div> {/*modal hdialog*/}
            </div> {/*modal*/}
          </div>;
    }
}

export default NewTask; 