import './TamanhoTexto.css';

const TamanhoTexto = ({texto}) => {

    const tamanhoTexto_ = texto.length;

    return (
        <>
        <div className='tamanhoTexto'>O texto possui {tamanhoTexto_} caracteres</div>
        </>
    )
};

export default TamanhoTexto;