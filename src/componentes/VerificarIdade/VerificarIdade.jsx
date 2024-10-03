import './VerificarIdade.css'

const VerificarIdade = () => {

    const idadeUm = 18;
    const idadeDois = 17;

    return (
        <>
            <div className="VerificarIdadeUm">
                {idadeUm} anos, é {idadeUm >= 18 ? 'maior' : 'menor'} de idade!
            </div>
            <div className="VerificarIdadeDois">
                {idadeDois} anos, é {idadeDois >= 18 ? 'maior' : 'menor'} de idade!
            </div>
        </>
    );
};

export default VerificarIdade;