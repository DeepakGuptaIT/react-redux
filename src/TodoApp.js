import React from "react";
import AddTodo from "./components/AddTodo";
import AddStudent from "./components/AddStudent";
import HomeContainer from "./components/Home";
import TodoList from "./components/TodoList";
import StudentList from "./components/StudentList";
import BootStrapPage from "./components/BootStrapPage";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import { withCookies } from 'react-cookie';
import { Route, Link, Switch } from 'react-router-dom';

class TodoApp extends React.Component {

  componentDidMount = () => {
    console.log('cookie', this.props.cookies);
    //setting a cookie
    let cookies = this.props.cookies;
    cookies.set('name', 'Ross', { path: '/' });
    cookies.set('student', { id: '12344' }, { path: '/' });
    //getting a cookie
    let nameFromCookie = cookies.get('name');
    console.log(nameFromCookie);
  }

  render() {
    return (
      <div className="todo-app">
        <Switch>
          <Route
            path="/home"
            render={() => (<HomeContainer cookies={this.props.cookies} />)}
          />
           <Route path="/bootstap" component={BootStrapPage} />
        </Switch>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
        <AddStudent />
        <StudentList />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Back</Link>
          </li>
          <li>
            <Link to="/bootstap">BootStrap</Link>
          </li>
        </ul>

        <Switch>
          <Route
            path="/home"
            render={() => (<HomeContainer cookies={this.props.cookies} />)}
          />
           <Route path="/bootstap" component={BootStrapPage} />
        </Switch>
      </div>
    );
  }

}

export default withCookies(TodoApp);
