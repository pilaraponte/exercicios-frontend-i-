import './ListaProdutos.css';

const ListaProdutos = () => {

   const produtoUm = "Celular Samsung";
   const produtoDois = "Notebook Acer";
   const produtoTres = "SmarTV LG";
   const produtoQuatro = "Tablet Multilaser";
   const produtoCinco = "Monitor Dell";
   const produtoSeis = "Impressora HP"
   
    return (
        <>
           <ul className='ListaProdutos'>
            <li>{produtoUm}</li>
            <li>{produtoDois}</li>
            <li>{produtoTres}</li>
            <li>{produtoQuatro}</li>
            <li>{produtoCinco}</li>
            <li>{produtoSeis}</li>
           </ul>
        </>
    );
};

export default ListaProdutos;