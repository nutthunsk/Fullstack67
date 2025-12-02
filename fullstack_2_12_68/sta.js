const fullname = "nuutthun  sangkaew";

const cleanedName = fullname.trim();
console.log(cleanedName)

const nameParts = cleanedName.split(' ');
console.log(nameParts)

const finalname = nameParts.filter(Boolean);
console.log(finalname)

const firstname = finalname[0];
console.log(firstname)