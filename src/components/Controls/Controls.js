import React, {useState} from 'react';
import './Controls.css';
import Info from '../Info/Info'

export default function Controls() {

    
    const [num, setNum] = useState(0)
   
    

    return (
        <div className="controls_main">
        <Info num={num} />
        <div className='control-bar'>
            <div className='previous'>
            <button onClick={() => setNum(num -1)} > &lt; Previous </button>
            </div>
            <div className='btn-group'>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            </div>
            <div className='next'>
            <button > Next &gt; </button>
            </div>
        </div>
        </div>
    )
}

