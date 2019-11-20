let i = 0;
let sum = 0;

for (i; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
    console.log(sum);
}
//commit test