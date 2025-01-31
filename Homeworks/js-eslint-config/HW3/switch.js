const b1 = true;
const b2 = false;

switch (b1 == b2) {
    case true: {
        console.log('if worked');
        break;
    }
    case false: {switch (b1 && b2) {
        case true: {
            console.log('if else worked');
            break;
    }
    default: {
        console.log('else worked')
    }
}
}
}