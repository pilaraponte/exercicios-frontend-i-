import './HoraAtual.css'

const HoraAtual = () => {

    const horaAtual_ = new Date().getHours();
    return(
        <>
        <div className="HoraAtual">{horaAtual_}</div>
        </>
    );
};

export default HoraAtual;
