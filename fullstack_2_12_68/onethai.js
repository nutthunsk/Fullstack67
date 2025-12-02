const registrationDate = new Date('2025-02-12T10:00:00z');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate= registrationDate.toLocaleDateString('th-TH', options);

console.log(`${formattedDate}`)