import React, { Component } from 'react';
 
class AddMovie extends Component {
  state = { 
    title: '',
    director: '',
    hasOscars: false,
    IMDbRating: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Call the parent passed function
    this.props.addTheMovie(this.state);
    
    // Reset
    this.setState({
      title: '',
      director: '',
      hasOscars: false,
      IMDbRating: '' 
    })  
  }

//   handleTitleInput = (event) => {
//     this.setState({
//       title: event.target.value
//     })
//   }
 
//   handleDirectorInput = (event) => {
//     this.setState({
//       director: event.target.value
//     })
//   }
 
//   handleHasOscarsCheck = (event) => {
//     this.setState({
//       hasOscars: event.target.checked // boolean value from `.checked` state here!
//     })
//   }
 
//   handleRating = (event) => {
//     this.setState({
//       IMDbRating: event.target.value
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>Title:</label>
//           <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleTitleInput(e)} />
 
//           <label>Director:</label>
//           <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleDirectorInput(e)} />
 
//           <label>Oscar Awarded:</label>
//           <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleHasOscarsCheck(e)} />
 
//           <label>IMDb Rating:</label>
//           <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleRating(e)} />
            
//           <button>Submit</button>
//         </form>
//     </div>
//     )
//   }

// Handling multiple inputs
// Works perfectly but still our code is not really DRY. We have four handlers for four inputs. That is quite okay but there’s 
// way to handle multiple inputs all at the same time. If we comment out all four handlers and add new one (handleChange()), 
// we should see the same result. The final version of our our <AddMovie /> component is this:

handleChange(event) {
    let { name, value, type } = event.target;
    
    // special case for checkboxes (where boolean value is hold in .checked property)
    if (type === 'checkbox') {
      value = event.target.checked;
    }
    
    this.setState({[name]: value});
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} />
          
          <label>Director:</label>
          <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleChange(e)} />
          
          <label>Oscar Awarded:</label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} />
          
          <label>IMDb Rating:</label>
          <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)} />
            
          <button>Submit</button>
        </form>
      </div>
    )
  }

}
 
export default AddMovie;

// Controlled Components
// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it 
// based on user input. In React, mutable state is typically kept in the state property of components, and only 
// updated with setState().

// We can combine the two by making the React state be the “single source of truth”. Then the React component that 
// renders a form also controls what happens in that form on subsequent user input. An input form element whose value 
// is controlled by React in this way is called a “controlled component”.

// You provided a value prop to a form field without an onChange handler… set either onChange or readOnly.

// Basically what is going on is that the state is not being updated and the value inside the input is setting the input all 
// the time to the values from the current state. 
// By default, they are looking for some change in the state to happen and since that is not happening we are seeing 
// all these errors. So we have to handle the changes somehow and the best way to do it is by using onChange listener. 
// handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.

// With a controlled component, every state mutation will have an associated handler function. 
// This makes it straightforward to modify or validate user input.