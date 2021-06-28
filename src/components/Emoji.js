import React from 'react';
 
class Emoji extends React.Component {
  state = {
    mood: 0
  };

  changeMood = () => {
      console.log('counting...')
      this.setState({
        mood: Math.round(10*(Math.random()-.5))
      });
  }
 
  

  render() {

    console.log('The mood is: ', this.state.mood); // check the console to see how mood is changing

    return (        
        <div>            
            <hr></hr>
            {(() => {
                if (this.state.mood < 0) {
                    return (<span onClick={this.changeMood}> 😭</span>);
                } else if (this.state.mood > 0) {
                    return (<span onClick={this.changeMood}> 😄</span>);
                } else {
                    return (<span onClick={this.changeMood}> 😐</span>);
                }
            })()}
        </div>
        )   
    }
}
 
export default Emoji;


  

