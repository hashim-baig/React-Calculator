import './Operations.css'

const operations = {
    clear: 'Reset',
    equals: '='
}

export default function Operations({onButtonClick}) {

    const handleButtonClick = (value)=> {
        onButtonClick(value);
    }

    return (
        <div className="operations">
            {
                Object.entries(operations).map(([key, value]) => {
                    return <button key={key} id={key} onClick={()=> handleButtonClick(value)}>{value}</button>
                })
            }
        </div>
    );
}