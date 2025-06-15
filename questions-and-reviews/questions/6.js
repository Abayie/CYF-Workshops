



function printTimesTables(n) {
    let count = 1;
    let i = 1;
    while(count <= 12) {
        const product = n * i;
        console.log(`${n} * ${i} = ${product}`);
        count++;
        i++
    }
}
printTimesTables(1)
