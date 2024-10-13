import './Calculadora.css';

const Calculadora = ({ numeroUm, numeroDois, operacao }) => {

    const num1 = isNaN(Number(numeroUm)) ? 0 : Number(numeroUm);
    const num2 = isNaN(Number(numeroDois)) ? 0 : Number(numeroDois);
    let resultado;
    let operador; 

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            operador = '+';
            break;
        case "subtracao":
            resultado = num1 - num2;
            operador = '-';
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            operador = '*';
            break;
        case "divisao":
            resultado = num2 !== 0 ? num1 / num2 : "Divisão por zero!";
            operador = '÷';
            break;
        default:
            resultado = "Operação inválida!";
            operador = '';
    }

    return (
        <div className='calculadora'>
            {num1} {operador} {num2} = {resultado}
        </div>
    );
}

export default Calculadora;
