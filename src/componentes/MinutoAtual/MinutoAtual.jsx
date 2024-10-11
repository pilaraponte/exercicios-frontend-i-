import './MinutoAtual.css';

const MinutoAtual = () =>{
    const minutoAtual_ = new Date().getMinutes();
    return(
        <>
            <div className="MinutoAtual">{minutoAtual_}</div>
        </>
    );
};

export default MinutoAtual;