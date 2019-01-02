import React, { Component } from 'react';
import ComponentInfo from './ComponentInfo';
import JSXInfo from './JSXInfo';

class Content extends Component{

    render() {

        return(
   <div >
       <center><h2>Content :</h2></center>
            <ComponentInfo/>
            <JSXInfo/>
        </div>  
        )
    }
}

export default Content;