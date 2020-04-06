import React, { Component } from 'react';


export class tictak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opponents: [  
        { choice: 'Rock', weight: 0 },
        { choice: 'Paper', weight: 1 },
        { choice: 'Scissors', weight: 2 },
      ], 
            
    compChoice = (cc) => {
        switch(cc) {
            case 0:
              return 'Rock';
            case 1:
                return 'Paper'
            case 2:
                return 'Scissors'
          }
    }

    };
  }
}

export default tictak;

---------------------------------------------------------------

import React, { useState } from 'react';
function tForm({/*deconstructed prop*/addname}){
   

    const Tictak = () => {
    
     const [state, setstate] = useState([
       {name: "rich"},
       {age:'40'}
     ])
    
      return(
        <div>
    
        </div>
    
      )
    }
    
    export default Tictak;

