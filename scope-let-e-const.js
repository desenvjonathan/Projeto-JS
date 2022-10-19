//const e let são locais e só funcionam no escopo onde foi criado

let y = 1;

{
    console.log ('> existe y antes? ', y)
    //ou seja, assim não funciona
}


{
    console.log('> existe y ? ', y)
    y = 0;
    //assim funciona
}

//scope = {isso} e ele determina a visibilidade de alguma variável no JS

//caso o let, seja trocado por const nessa situação, onde inicialmente o y era 1 e depois se tornou 0, enfrentameremos um problema, pois a variável constante, não muda.
// se for criada uma const dentro de um novo escopo, poderemos atribuir o valor que quisermos


