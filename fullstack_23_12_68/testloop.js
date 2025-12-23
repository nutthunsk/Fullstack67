const guests = ['Alice','Bob','Charlie','David'];
let index = 0;

while (index < guests.length) {
    const name = guests[index];
    index++;

    if (name === 'Charlie'){
        console.log('Found Charlie!')
        break;
    }

}
