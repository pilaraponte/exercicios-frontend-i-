import './DiaAtual.css'

const DiaAtual = () => {
   
    const diaAtual_ = new Date().getDate();
       
    return (
      <>
        <div className='diaAtual'>{diaAtual_}</div>
      </>
    );
  };
  export default DiaAtual;