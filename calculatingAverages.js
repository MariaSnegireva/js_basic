var Calculator = {
    average: function (...args) {
        if (args.length === 0) {
            return 0;
        }
        let sum = 0;
        let count = 0;

        for (let elem of args) {
            sum += elem;
            count++;
        }
        return sum / count;
    }
};
