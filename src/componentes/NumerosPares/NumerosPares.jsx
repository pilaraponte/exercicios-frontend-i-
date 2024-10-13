import './NumerosPares.css';

const NumerosPares = (numero)  => {

    const numeros = [2, 6, 10, 12, 20, 24];
 
    return (
        <div className='numerosPares'>
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}</li> 
                ))}
            </ul>
        </div>
    );
};


export default NumerosPares;