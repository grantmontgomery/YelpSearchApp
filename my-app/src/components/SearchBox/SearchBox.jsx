import React, { Component } from 'react';
// import {AppContext} from "../../AppContext"
import "./SearchBox.css"

require("dotenv").config()


class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state={
            term: "",
            location: ""
        }
    }

    updateTextInput = (event) => {
       this.setState({[event.target.name]: event.target.value})
    }

    // makeCall = () => {
    //     const {term, location} = this.state
    //     const yelp = new URL ("https://api.yelp.com/v3/businesses/search"),
    //     params = {term: term, location: location, radius: 10000}

    //     Object.keys(params).forEach(key => yelp.searchParams.append(key, params[key]))

    //     const response = fetch(yelp, {
    //     headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    //     }
    //         })

    //     response.then(resp => resp.json())
    //     .then(data => console.log(data.businesses))
    //     .catch(error => console.log(error.message))
    // }

    // onHandleSubmit = (event) => {
    //     event.preventDefault()
    //     this.makeCall()
    // }

    // addTask = () => {
    //     if(this.state.newTodo.value === ""){
    //         alert("Must enter in a task.")
    //     }
    //     else{
    //         this.setState({
    //             todos: [...this.state.todos, this.state.newTodo]
    //         })
    //         console.log(this.state.newTodo)
    //         this.setState({newTodo: {id: null, value: ""}})
    //     }
    // }



    render() { 
        return (
            
                <div className="searchbox">
                <form action="">
                    <label htmlFor="">Search</label>
                    <input type="text"
                    name="term"
                    value={this.state.term}
                    onChange={e => this.updateTextInput(e)}
                    />
                    <br/>
                    <label htmlFor="">Location</label>
                    <input name="location"
                    type="text"
                    value={this.state.location}
                    onChange={e => this.updateTextInput(e)}/>
                    <br/>
                    <button onClick={() => console.log(process.env.REACT_APP_YELP_API_KEY)}>
                        Submit
                    </button>
                </form>
            </div>
            
            
          );
    }
}
 
export default SearchBox;
