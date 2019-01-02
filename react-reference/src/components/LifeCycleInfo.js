import React, { Component } from 'react';

class LifeCycleInfo extends Component{

    render(){
        return(
            <div>
                <b><p>LifeCycleInfo: </p></b>
                <ul>
                    <li>render()</li>
                    <li>constructor()</li>
                    <li>componentDidMount()</li>
                    <li>componentDidUpdate()</li>
                    <li>componentWillUnmount()</li>
                </ul>

            </div>
        )
    }
}

export default LifeCycleInfo;