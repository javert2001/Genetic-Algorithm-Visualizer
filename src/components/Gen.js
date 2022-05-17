import React from 'react'

const Gen = ({ gen }) => {
    var x = 0;
    return (
        <div>
            <table className='table'>
                <tbody>
                    <tr>
                        {gen.map((val => (
                            <td scope='row' key={x++}>{val}</td>
                        )))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Gen