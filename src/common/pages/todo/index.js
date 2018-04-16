// eslint-disable
import React, { Component } from 'react'
import './index.less'

const MyContainer = (WrappedComponent) =>
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

// 装饰器的前世今生
@MyContainer
class todo extends Component {
    render() {
        return (
            <div className="animated swing todo">
                <div>asdfasfasdfasdfsfasf</div>
            </div>
        )
    }
}

export default todo