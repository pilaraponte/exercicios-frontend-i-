import './Divisao.css';

const Divisao = (props) => {

    const numeroUm = Number(props.numeroUm);
    const numeroDois = Number(props.numeroDois);

    const divisao = numeroUm / numeroDois;

    return(
        <>
        <div className='divisao'>
            {numeroUm} / {numeroDois} = {divisao}
        </div>
        </>
    )
}

export default Divisao;