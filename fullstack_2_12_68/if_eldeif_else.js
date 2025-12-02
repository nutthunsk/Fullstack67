const isatus = 200;

if (isatus === 200) {
    console.log('OK!');
}else if (isatus === 400) {
    console.log('Bad');
}else {
    console.log('Un');
}

switch (isatus) {
    case 200:
        console.log('OK!');
        break;
    case 400:
        console.log('Bad');
        break;
    default:
        console.log('Un');
        break;
    
}

const message = (isatus === 200) ?"OK" :"Bad"
    console.log(message);