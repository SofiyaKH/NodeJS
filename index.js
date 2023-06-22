const M = 56;
const N = 67;

const isPrime = (num) => {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

for (let i = M; i < N; i++) {
  isPrime(i) ? console.log(i) : null;
}
