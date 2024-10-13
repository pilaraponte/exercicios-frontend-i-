import './Multiplicacao.css';

const Multiplicacao = (props) => {

    const numeroUm = Number(props.numeroUm);
    const numeroDois = Number(props.numeroDois);

    const multiplicacao = numeroUm * numeroDois;

    return(
        <>
        <div className='multiplicacao'>
            {numeroUm} * {numeroDois} = {multiplicacao}
        </div>
        </>
    )
}

export default Multiplicacao;