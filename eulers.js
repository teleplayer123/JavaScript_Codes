function gcd(a,b) {
    if (a == 0) {
        return b;
    }
    return gcd(b % a, a);
}

function phi(n) {
    var res = 1;
    for (let i = 2; i < n; i++) {
        if(gcd(i,n) == 1) {
            res++;
        }
    }
    return res;
}

for (let i = 1; i < 10; i++) {
    console.log(`phi(${i}) = ${phi(i)}`);
}