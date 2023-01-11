import {useState} from 'react';
import PropTypes from'prop-types';



export const CounterApp = ({value})=>{
    
    const [ counter, setCounter ] = useState( value = 10 )
    
    const handleReset = () => {
        setCounter( value )
    }

    const handleResta = () => {
        setCounter( counter - 1 );
    }
    
    const handleAdd = ( ) => {
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter ( (c) => c + 1 )

    }

    return (
        <><h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleResta }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};