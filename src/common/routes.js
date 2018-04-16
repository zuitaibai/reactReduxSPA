import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import follow from 'pages/follow'
import Tools from 'pages/tools'
import Music from 'pages/music'
import Todo from 'pages/todo'
import TodoList from 'pages/todoList'
import Search from 'pages/search'


export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/follow" component={follow} />
                <Route path="/tools" component={Tools} />
                <Route path="/music" component={Music} />
                <Route path="/todo" component={Todo} />
                <Route path="/todoList" component={TodoList} />
                <Route path="/searchEngine" component={Search} />
                <Route component={Tools}/>
            </Switch>
        )
    }
}