import React, { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycleInfo from './LifeCycleInfo';

class ComponentInfo extends Component{

    render(){

        return(

            <div>ComponentInfo :- 
               <b><p>Component</p></b> 
                <p>- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
                <PropsInfo/>
                <StateInfo/>
                <LifeCycleInfo/>
            </div>
        )
    }
}

export default ComponentInfo;