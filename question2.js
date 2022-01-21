function isprime(n) {
    if (n == 0 || n == 1) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
        return true;
    }
}
let n = 200;
for (let i = 0; i <= n; i++) {
    if (isprime(i) == true) {
        console.log(i);
    }


}