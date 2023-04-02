const minhaEscolha = process.argv[2]
const meuNumero = process.argv[3]
const  CPU = getRndInteger(1 , 15)

const soma = +CPU + +meuNumero

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  if(minhaEscolha === 'par' && soma%2 === 0){
    console.log(`você escolheu par e a soma dos numeros foi ${soma} vc ganhou`);

  }else if(minhaEscolha === 'impar' && soma%2 === 1){
    console.log(`você escolheu impar e a soma dos numeros foi ${soma} vc ganhouu`);
  }
  else{
    console.log(`vc escolheu ${minhaEscolha} e a soma foi ${soma} ent vc perdeu`);
  }