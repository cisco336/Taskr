import React, { Component } from "react";
import Axios from "axios";
import $ from "jquery";

class Filters extends Component{
    constructor(props){
        super(props);
        this.state = {
            priority: ''
        }
        this.togglerAnimate = this.togglerAnimate.bind(this)
    }
    togglerAnimate() {
        console.log($("#filter-toggler").children("i"));
        $('#filter-toggler').children('i').toggleClass('active');
    }
    render(){
        const { filterPrioLow, filterPrioMed, filterPrioUrg, filterCompleted, filterUnCompleted, findThemAll } = this.props;
        return <span>
            <h3 className="pr-4">
              Filters:
              <button data-toggle="collapse" data-target="#filters" aria-expanded="false" aria-controls="filters" className="btn  float-right" id="filter-toggler" onClick={this.togglerAnimate}>
                <i className="fas fa-chevron-down" />
              </button>
            </h3>
            <hr className="hr" />
            <div id="filters" className="collapse">
              <h4 id="priority">Priority:</h4>
              <span id="priorityOp">
                <button type="button" className="btn btn-success" onClick={filterPrioLow}>
                  !
                </button>
                <button type="button" className="btn btn-warning" onClick={filterPrioMed}>
                  !!
                </button>
                <button type="button" className="btn btn-danger" onClick={filterPrioUrg}>
                  !!!
                </button>
              </span>
              <h4 id="completed">Completed: </h4>
              <span id="completedOp">
                <button type="button" className="btn btn-secondary" onClick={findThemAll}>
                  <i className="fas fa-list" />
                </button>
                <button type="button" className="btn btn-success" onClick={filterCompleted}>
                  <i className="far fa-check-square" />
                </button>
                <button type="button" className="btn btn-danger" onClick={filterUnCompleted}>
                  <i className="far fa-square" />
                </button>
              </span>
            </div>
          </span>;
    }
}

export default Filters;