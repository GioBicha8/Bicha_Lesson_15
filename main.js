//  Date

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

// for ციკლი, 0 დან 50 - მდე

for (let i = 0; i <= 50; i++) {
  //  console.log(i)
}

// while ციკლი 0 დან 150

let i = 0;

while (i < 150) {
  i++;
  //   console.log(i);
}

// do while ციკლი 0 დან 100

let a = 0;

do {
  a++;
  // console.log (a)
} while (i < 100);



// (i * i)
 

let my = []

for ( let e = 1; e <=100; e++ ) {
    my.push(e*e);
}
console.log(my)


