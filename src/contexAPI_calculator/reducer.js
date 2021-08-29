export const reducer = (state, action) => {
    let { display, lastNum, operator } = state;


    switch (action) {
        case 'C':
            display = '';
            lastNum = '';
            operator = ''
            break;
        case '+':
            lastNum = display;
            operator = action;
            display = '';
            break;
        case '-':
            lastNum = display;
            operator = action;
            display = '';
            break;
        case '*':
            lastNum = display;
            operator = action;
            display = '';
            break;
        case '/':
            lastNum = display;
            operator = action;
            display = '';
            break;

        case '=':
            if (display) {
                switch (operator) {
                    default: ;
                        break;
                    case "+": display = Number(lastNum) + Number(display);
                        break;
                    case "-": display = Number(lastNum) - Number(display);
                        break;
                    case "*": display = Number(lastNum) * Number(display);
                        break;
                    case "/": display = Number(lastNum) / Number(display);

                }
            }else{
                return state;
            }

            break;
        default: display = display + action;
    }



    return { display, lastNum, operator }
}
