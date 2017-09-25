import React from 'react';

var eventData = require('json-loader!../../resources/events.json');

export default class PopulateHtmlAttr extends React.Component {

    constructor() {
        super();
        this.state = {invited_count:null,year:null,month:null,day:null};
    }

    populateParagraph() {
        
        if(this.state.year != null) {
            return(
               <p>Invited Count:{this.state.invited_count}<br />
                   Year : {this.state.year}<br />
                   Month : {this.state.month}<br/>
                   Day : {this.state.day}<br />
               </p> 
            );
        }
     }

     dynamicallyLoadDropDown() {
        var data =[];
        data = eventData.events;
        var renderoptions = data.map((event) => {
            return (<option key={event.occasion} value = {event.occasion}>
            {event.occasion}
            </option>
            )
        })
        return renderoptions;
    }

    determineEventsToBeDisplayed(e) {
        var value =  e.target.value;
        var jsonData =[];
        jsonData = eventData.events;
        var output;
        for(var i=0; i<jsonData.length; i++) {
            if(jsonData[i].occasion === value) {
                this.setState({invited_count:jsonData[i].invited_count,year:jsonData[i].year,month:jsonData[i].month,day:jsonData[i].day});
                break;
            }
        }
    }

    render() {
        return(
            <div>
                <select id="event" onChange={this.determineEventsToBeDisplayed.bind(this)}>
                {this.dynamicallyLoadDropDown()}    
                </select>
                {this.populateParagraph()} 
            </div>    
        )
    }
}