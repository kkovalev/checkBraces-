const openBraces = ['(', '[', '{', '<'];
const closeBraces = [')', ']', '}', '>'];

function checkBraces(str = ''){
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    const ErrorValue = 1;
    const SuccessValue = 0;
    const Stack = [];

    // Пустая строка заведомо валидная
    if(!str.length) {
        return SuccessValue;
    }

    // Перебираем строку посимвольно
    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        
        // Открывающие складываем в стэк
        if (isOpenBrace(char)) {
            Stack.push(char);
        } else
        // Закрывающие проверяем на валидность и уменьшаем стэк
        if(isClosedBrace(char)) {
            // Если стек пуст - ошибка, очевидно
            if (Stack.length < 1) {
                return ErrorValue;
            }

            // Берем крайнюю открытую скобку
            const currentOpenBrace = Stack.pop(char);

            // Проверяем соответвтсие скобок
            if (openBraces.findIndex(brace => brace === currentOpenBrace) !== closeBraces.findIndex(brace => brace === char)) {
                return ErrorValue;
            }
        } // Прочие символы игнорируем
    }

    return SuccessValue;
}

function isOpenBrace(char) {
    return openBraces.includes(char)
        ? true
        : false;
}

function isClosedBrace(char) {
    return closeBraces.includes(char)
        ? true
        : false;
}


console.log(
    checkBraces("---(++++)----") == 0,
    checkBraces("") == 0,
    checkBraces("before ( middle []) after ") == 0,
    checkBraces(") (") == 1,
    checkBraces("} {") == 1,
    checkBraces("<(   >)") == 1,
    checkBraces("(  [  <>  ()  ]  <>  )") == 0,
    checkBraces("   (      [)") == 1,
)