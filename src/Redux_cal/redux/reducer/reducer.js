import { C, EQUAL, NUMBER, OPERATOR, ZERO } from "../action/actionType";


let initial = {
    dispaly: '',
    firstNum: '',
    operator: ''

}


const calculation = (state = initial, action) => {

    let { dispaly, firstNum, operator } = state;
    const { type, playhod } = action;
    console.log(action);


    switch (type) {
        case C:
            dispaly = ''
            firstNum = ''
            operator = ''
            break;

        case EQUAL:
            if (dispaly && firstNum) {
                switch (operator) {
                    case "+":
                        dispaly = Number(firstNum) + Number(dispaly);
                        break;
                    case "-":
                        dispaly = Number(firstNum) - Number(dispaly);
                        break;
                    case "*":
                        dispaly = Number(firstNum) * Number(dispaly);
                        break;
                    case "/":
                        dispaly = Number(firstNum) / Number(dispaly);
                        break;
                    default: return state;

                }
                operator = '=';



            }
            break;

        case OPERATOR:
            dispaly ? firstNum = dispaly : dispaly = '0';
            dispaly = '';
            operator = playhod;
            break;

        case ZERO:
            dispaly ? dispaly = dispaly + playhod : dispaly = '';
            break;

        case NUMBER:
            dispaly = dispaly + playhod;
            break;

        default: return state;

    }

    dispaly = String(dispaly)

    return { dispaly, firstNum, operator };
}

export default calculation;