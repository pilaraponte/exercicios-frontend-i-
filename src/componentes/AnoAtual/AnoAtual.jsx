import './AnoAtual.css';

const AnoAtual= () => {

  const anoAtual_ = new Date().getFullYear();

  return (
      <>
        <div className='AnoAtual'>{anoAtual_}</div>
      </>
    );
  };
  export default AnoAtual;


