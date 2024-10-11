import './DataCompletaAtual.css';



const DataCompletaAtual = () => {

    const diaAtual = new Date().getDate();
    const mesAtual = new Date().getMonth()+1;
    const anoAtual = new Date().getFullYear();
    const horaAtual = new Date().getHours();
    const minutoAtual = new Date().getMinutes();
    const dataCompletaAtual = `${diaAtual}/${mesAtual}/${anoAtual} ${horaAtual}:${minutoAtual}`


    return(
        <>
        <div className="DataCompletaAtual">{dataCompletaAtual}</div>
        
        </>
    );
};

export default DataCompletaAtual;