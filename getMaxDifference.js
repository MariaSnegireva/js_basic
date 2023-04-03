function getMaxDifference(numbers) {
    // якщо всього один елемент або масив порожній, то рахувати різницю немає сенсу
    if (numbers.length < 2) {
        return 0;
    }

    // знаходимо першу різницю
    let maxDifference = numbers[1] - numbers[0];

    // починаємо перебір із 3 елементу
    for (let i = 2; i < numbers.length; i++) {
        const current = numbers[i]; // поточне число
        const previous = numbers[i - 1]; // попереднє число
        const difference = current - previous;

        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }

    return maxDifference;
}
