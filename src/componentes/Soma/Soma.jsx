import './Soma.css';

const Soma = (props) =>{
    
    const numeroUm = Number(props.numeroUm);
    const numeroDois = Number(props.numeroDois);

    const soma = numeroUm + numeroDois;

    return(
        <>
        <div className='soma'>
            {numeroUm} + {numeroDois} = {soma}
        </div>
        </>
    );
};

export default Soma;