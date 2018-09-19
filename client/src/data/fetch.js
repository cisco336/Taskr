var Tasks = React.createClass({
            getInitialState: function(){
                return({
                    tasks:[]
                });
            },
            render: function(){
                var tasks = this.state.tasks;
                tasks = tasks.map(function(task, index){
                    return(
                        <li key={index}>
                            <span className={task.obj.available}></span>
                            <span className="name">{task.obj.name}</span>
                            <span className="rank">{task.obj.rank}</span>
                            <span className="dist">{Math.floor(task.dist / 1000)} Km</span>
                        </li>
                    )
                });
                return(
                    <div id="task-container">
                        <form id="search" onsubmit={this.handleSubmit}>
                            {/* <label>Enter User ID: </label>
                            <input type="text" ref="userId" placeholder="user id"/> */}
                            <label>Enter task ID: </label>
                            <input type = "text" ref = "taskId" placeholder = "task id" />
                            <button className="btn btn-outline-primary" type="submit" value="Find tasks">Submit</button>
                        </form>
                        <section>
                            <button onClick={this.findThemAll} className="btn btn-xl btn-outline-primary">Find them all...</button>
                        </section>
                        <ul>
                            {tasks}
                        </ul>
                    </div>
                );
            },
            handleSubmit: function(e){
                e.preventDefault();
                var taskId = this.refs.taskId.value;

                fetch('/api/to-do?_id=' + taskId).then(function(data){
                    return data.json();
                }).then(json => {
                    this.setState({
                        tasks: json
                    });
                });
            },
            findThemAll: function(e){
                e.preventDefault();
                fetch('/api/todo/').then(function(data){
                    return data.json();
                }).then(json => {
                    this.setState({
                        tasks: json
                    });
                });
            }
        });

        export default Tasks;