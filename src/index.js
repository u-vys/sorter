class Sorter {
    constructor() {
        this.array = [];
        this.compareFunction;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        var i;
        var temp = [];
        for (i = 0; i < indices.length; i++) {
            temp.push(this.array[indices[i]]);
        }
        temp.sort(this.compareFunction);
        for (i = 0; i < indices.length; i++) {
            this.array[indices[i]] = temp[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;