import './Number.css'

const numbers = {
    seven: '7',
    eight: '8',
    nine: '9',
    delete: "Del",
    four: '4',
    five: '5',
    six: '6',
    add: '+',
    one: '1',
    two: '2',
    three: '3',
    subtract: '-',
    decimal: '.',
    zero: '0',
    divide: '/',
    multiply: 'x'
}

export default function Number({onButtonClick}) {

    const handleButtonClick = (value)=> {
        onButtonClick(value);
    }
    return (
        <div className="numbers">
            {
                Object.entries(numbers).map(([key, value]) => {
                    return <button key={key} id={key} onClick={()=>handleButtonClick(value)}>{value}</button>
                })
            }
        </div>
    );
}