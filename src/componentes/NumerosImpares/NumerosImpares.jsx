import './NumerosImpares.css';

const NumerosImpares = (numero) => {

    const numeros =[1, 5, 7, 13, 15, 31];

    return (
        <div className='numerosImpares'>
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}</li> 
                ))}
            </ul>
        </div>
    );
};

export default NumerosImpares;