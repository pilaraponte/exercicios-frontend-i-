import './ListaProdutos.css';

const ListaProdutos = () => {
    const produtos =  ['Celular Samsung', 'Notebook Acer', 'Smart TV LG', 'Impressora HP', 'Tablet Multilaser', 'Monitor Dell'];

    return (
        <div className='ListaProdutos'>
            <ul>
                {produtos.map((produto, index) => (
                    <li key={index}>{produto}</li> 
                ))}
            </ul>
        </div>
    );
};

export default ListaProdutos;
