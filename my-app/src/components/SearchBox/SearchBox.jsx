import React, { Component } from 'react';
import "./SearchBox.css"


class SearchBox extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        return (
            <div className="searchbox">
                <form action="">
                    <label htmlFor="">Search</label>
                    <input type="text"/>
                    <br/>
                    <label htmlFor="">Location</label>
                    <input type="text"/>
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
