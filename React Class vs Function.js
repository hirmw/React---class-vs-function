// import React, { Component } from 'react';


// export class tictak extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       opponents: [  
    //     { choice: 'Rock', weight: 0 },
    //     { choice: 'Paper', weight: 1 },
    //     { choice: 'Scissors', weight: 2 },
    //   ], 
            
    // compChoice = (cc) => {
    //     switch(cc) {
    //         case 0:
    //           return 'Rock';
    //         case 1:
    //             return 'Paper'
    //         case 2:
    //             return 'Scissors'
    //       }
    // }

//     };
//   }
// }

// export default tictak;

import React, {useState} from 'react';
import './App.css' //.app{background: '#566', padding: 30px, height: 100px}

function tictak() {

    //this.state.opponents & //this.setstate({oppenents:})
    const [opponents, setopponents] = useState(
        [
            { choice: 'Rock', weight: 0 },
            { choice: 'Paper', weight: 1 },
            { choice: 'Scissors', weight: 2 }
        ]
    )

    return (
        <div> </div>
        <display choice={opponents}> </display>
        <tForm></tForm>
    )

}
export tictak



function display(/*props.choice or {choice, weight}*/) {

    return(
        <div classname="todo"> </div>
    )

}
export display



function tForm({/*deconstructed prop*/addname}){
    const [value, setValue] = useState('');

    const handeSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addName(value)
        setValue('');  
    }

    return(
        <form onSubmit={handeSubmit}>
            <input type='text' className="input" value={value} onChange={e => setValue(e.target.value)} />
         </form>
    )

}

