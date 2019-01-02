import React, { Component } from 'react';

class PropsInfo extends Component {

    render(){
        return(
            <div>
               <b><p>PropsInfo: </p></b> 
                <p> - props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.</p>
            </div>
        )
    }
}

export default PropsInfo;