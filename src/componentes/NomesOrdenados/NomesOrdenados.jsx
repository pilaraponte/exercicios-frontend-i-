import './NomesOrdenados.css';

const NomesOrdenados = (nome) => {

    const nomes = [ 'Maude Stanton', 'Lizzie Patterson',  'Freeman Dickson','Elnora Clarke' ,'Arline Allison']
    const nomesOrdenados = nomes.sort();

    return (
        <div className='nomesOrdenados'>
            <ul>
                {nomesOrdenados.map((nome, index) => (
                    <li key={index}>{nome}</li> 
                ))}
            </ul>
        </div>
    );
};

export default NomesOrdenados;
