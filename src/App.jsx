import './App.css';
import DiaAtual from './componentes/DiaAtual/DiaAtual';
import OlaMundo from './componentes/OlaMundo/OlaMundo';
import MesAtual from './componentes/MesAtual/MesAtual';
import AnoAtual from './componentes/AnoAtual/AnoAtual';
import HoraAtual from './componentes/HoraAtual/HoraAtual';
import MinutoAtual from './componentes/MinutoAtual/MinutoAtual';
import DataCompletaAtual from './componentes/DataCompletaAtual/DataCompletaAtual';
import OlaPessoa from './componentes/OlaPessoa/OlaPessoa';
import ListaProdutos from './componentes/ListaProdutos/ListaProdutos';
import VerificarIdade from './componentes/VerificarIdade/VerificarIdade';
 



function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>

      <OlaMundo />
      <hr />

      <span>
        2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>

      <DiaAtual />
      <hr />

      <span>
      3. Crie um componente chamado 'MesAtual' que mostra o texto:
      "03" em uma div com o fundo verde, texto justificado à esquerda na cor branco
      </span>

      <MesAtual />
      <hr />

      <span>
      4. Crie um componente chamado 'AnoAtual' que mostra o texto:
      "2024" em uma div com o fundo vermelho, justificado à direita na cor amarelo
      </span>

      < AnoAtual />
      <hr />

      <span>
      5. Crie um componente chamado 'HoraAtual' que mostra o texto:
      "20" em uma div redonda 50x50 px centralizada com o fundo azul, texto na cor
      amarelo.
      </span>

      < HoraAtual />
      <hr />

      <span>
      6.Crie um componente chamado 'MinutoAtual' que mostra o texto:
      "30" em uma div redonda 50x50 px centralizada com o fundo rosa, texto na cor
      preta.
      </span>

      < MinutoAtual />
      <hr />


      <span>
      7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
      "15/03/2024 20:30" em uma div com o fundo marrom, texto centralizado na cor
      branca.
      </span>

      < DataCompletaAtual />
      <hr />

      <span>
      8. Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
      e mostra o texto: "Olá, nome!" em uma div com o fundo laranja, texto centralizado na cor branca.
      </span>

      < OlaPessoa nome="João"/>
      <hr />

      <span>
      9. Crie um componente chamado 'ListaProdutos' que aceita uma prop chamada
      'produtos' e deve ser uma lista de nomes de produtos. O componente deve listar os
      itens em tela em uma  ul  com o fundo roxo e a letra amarela.
      </span>

      < ListaProdutos />
      <hr />

      <span>
      10. Crie um componente chamado 'VerificarIdade' que aceita uma prop chamada
      'idade' e mostra uma mensagem:
      "xx anos, é maior de idade" se a idade for maior ou igual a 18, em uma div
      com o fundo verde e letra amarela;
      "xx anos, é menor de idade" se for menor que 18, em uma div com o
      fundo vermelho e letra amarela.;
      Chame o componente duas vezes, uma para maior de idade e outra para menor de
      idade.
      </span>

      < VerificarIdade />
      <hr />

      
    </>
  );
}

export default App;
