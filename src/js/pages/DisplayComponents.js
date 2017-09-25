import React from 'react';
import ReactDom from 'react-dom';
import PopulateHtmlAttr from '../component/PopulateHtmlAttr';

var eventData = require('json-loader!../../resources/events.json');

class Events extends React.Component {

    render() {
        return (
            <div>
                <div>
                <PopulateHtmlAttr />  
                </div>   
            </div>
        );
    }
}

ReactDom.render(<Events/>,app);