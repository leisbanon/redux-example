import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

import {fetchUserName} from '@/store/action'

class View6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store:'',
        }
    }
    fetchUserName() {
        let username = '张三李四王麻子';
        this.props.dispatch(fetchUserName(username)).then(() => {
            this.setState({
                store:this.context.store.getState()
            });
        })
    }
    componentDidMount() {
        this.setState({
            store:this.context.store.getState()
        })
    }
    render() {
        return(
            <div>
                <SubHeader title='异步 Action'/>
                <p><strong>当前应用Store State Data:</strong></p>
                <p>{JSON.stringify(this.state.store)}</p>

                <p><button onClick={this.fetchUserName.bind(this)}>发起异步Action 处理 => add redux store state username</button></p>
            </div>
        )
    }
}

View6.contextTypes = {
    store:PropTypes.object
}

export default hot(module)(connect()(View6));