import './VerificarIdade.css';

const VerificarIdade = (props) => {

    const idadeUm = props.idadeUm; 
    const idadeDois = props.idadeDois;

    return (
        <>
        <div className='idadeUm'>{idadeUm} anos, é maior de idade.</div>
        <div className='idadeDois'>{idadeDois} anos, é menor de idade.</div>
        </>
    );
};

export default VerificarIdade;