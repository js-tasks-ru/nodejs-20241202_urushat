export default function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw TypeError('Not a numbers');
    } else {
        return a + b;
    }
}
try {
  console.log(sum(5, 'u'));
} catch (error) {
  console.error(error.message);
}

