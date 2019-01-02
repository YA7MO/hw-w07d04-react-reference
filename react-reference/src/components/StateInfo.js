import React, { Component } from 'react';

class StateInfo extends Component {

    render(){

        return(

            <div>
                <b><p>StateInfo : </p></b>
                <p>- State is the place where the data comes from. We should always try to make our state as simple as possible and minimize the number of stateful components. If we have, for example, ten components that need data from the state, we should create one container component that will keep the state for all of them.</p>
            </div>
        )
    }
}

export default StateInfo;