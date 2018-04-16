import React from 'react'
import { Link } from 'react-router-dom'
import {Layout} from "antd/lib/index"
const { Sider } = Layout

export default class Aside extends React.Component{
    render() {
        return (
            <Sider className="leftMenu">
                <ul>
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/music">音乐系列</Link></li>
                    <li><Link to="/tools">小应用</Link></li>
                    <li><Link to="/todoList">待办事项</Link></li>
                    <li><Link to="/todo">todos</Link></li>
                </ul>
            </Sider>
        )
    }
}

