import React from 'react'
import Gen from './Gen'
const Generation = ({ generation }) => {
    //generation.map((gen) => console.log(gen))
    var x = 0;
    return (
        <>
            <h2>Hola</h2>
            {generation.map((gen) => (
                <Gen key={x++} gen={gen} />
            ))}
        </>
    )
}

export default Generation