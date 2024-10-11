import './MesAtual.css';


const MesAtual= () => {

  const mesAtual_ = new Date().getMonth() +1;
    return (
      <>
        <div className='MesAtual'>{mesAtual_}</div>
      </>
    );
  };
  export default MesAtual;