
import { gains } from "../genetic/geneticAlgo";

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
                    <div>Total Gained Value = {gains(gen)}</div>
                </tbody>
            </table>
        </div>
    )
}

export default Gen