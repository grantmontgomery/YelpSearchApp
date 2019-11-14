import React, { Component } from 'react';
import {AppContext} from "../../AppContext"
import "./SearchBox.css"


class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state={
            term: "",
            location: "",
            radius: null
        }
    }

    updateTextInput = (event) => {
        this.setState({term: event.target.value})
        console.log(this.state.term)
    }

    render() { 
        return (
            
                <div className="searchbox">
                <form action="">
                    <label htmlFor="">Search</label>
                    <input type="text"
                    value={this.state.term}
                    onChange={e => this.updateTextInput(e)}
                    />
                    <br/>
                    <label htmlFor="">Location</label>
                    <input type="text"
                    location={this.state.location}/>
                    <br/>
                    <label htmlFor="">Radius</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </form>
            </div>
            
            
          );
    }
}
 
export default SearchBox;
