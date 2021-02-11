(function () {
    Array.prototype.last = function () {
        return this.slice(-1)[0];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        const sum = this.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);

        return sum;
    };

    Array.prototype.average = function () {
        let avg = this.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0) / this.length;

        return avg;
    };
})();