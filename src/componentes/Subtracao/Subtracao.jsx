import './Subtracao.css';

const Subtracao = (props) => {

    const numeroUm = Number(props.numeroUm);
    const numeroDois = Number(props.numeroDois);

    const subtracao = numeroUm - numeroDois;

    return (
        <>
        <div className='subtracao'>
            {numeroUm} - {numeroDois} = {subtracao}
        </div>
        
        </>
    );
};

export default Subtracao;