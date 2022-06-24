const calculate = (first, operator, second, ) => {
    switch(operator){
        case '+':
            return first + second;

        case '-':
            return first - second;

        case '*':
            return first * second;

        case '/':
            return first / second;

        default:
            return 'Invalid Operation';
    }
};

const getinput =() => {
    let firstNumber = prompt('Enter first number:');
    let operator = prompt('Select an operator: "+", "-" "*" or "/"');
    let secondNumber = prompt('Enter the second number:');

    const result = calculate(Number(firstNumber), operator, Number(secondNumber));

    alert(result);
};

const button = document.querySelector('button');
button.addEventListener('click',e =>{
    getinput(e);
});


getinput();