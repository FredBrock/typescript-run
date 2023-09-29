function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  const result = fibonacci(n - 2) + fibonacci(n - 2);
  return result;
}
const ib = fibonacci(5)
// logpoint: FIB({n}): {result}