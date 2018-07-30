import React from 'react';
import {Provider} from './context';
class HashRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                pathname: window.location.hash ? window.location.hash.slice(1) : '/'
            }
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange',()=>{
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash ? window.location.hash.slice(1) : '/'
                }
            });
        })
    }

    render() {
        let value = {
            location: this.state.location,
            history: {
                push(to) {
                    window.location.hash = to;
                }
            }
        }
        //Provider 是react 16.3 版本增加的api, 通过 context 把数据向子组件传递
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}


export default HashRouter;
