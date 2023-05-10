function tri(numbers, order) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let x = 0; x < numbers.length - 1 - i; x++) {
            if ((order === 'asc' && numbers[x] > numbers[x + 1]) || (order === 'desc' && numbers[x] < numbers[x + 1])) {
                let temp = numbers[x];
                numbers[x] = numbers[x + 1];
                numbers[x + 1] = temp;
            }
        }
    }

    return numbers;
}
let numbers = [5, 7, 15, 1, 13];
let order = 'asc';
console.log(tri(numbers, order));
