// // Exercises Level 1
// // Create an Animal class. The class will have name, age, color, legs properties and create different methods
// // Create a Dog and Cat child class from the Animal Class.
// // Exercises Level 2
// // Override the method you create in Animal class

// Exercises Level 3


// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    constructor(age)  {
        this.age = age;
    }
    count() {
        return this.age.length;
    }

    sum() {
        return this.age.reduce((acc, val) => acc + val, 0);
    }
    min() {
        return Math.min(...this.age);
    }
    max() {
        return Math.max(...this.age);
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count();
    }
    median() {
        const sortData = [...this.age].sort((a, b) => a - b);
        const midIndex = Math.floor(sortedage.length / 2);
        if (sortData.length % 2 === 0) {
            return (sortedage[midIndex - 1] + sortedage[midIndex]) / 2;
        }
        return sortData[midIndex];
    }
    mode() {
        const frequencyMap = this.age.reduce((map, val) => {
            map[val] = (map[val] || 0) + 1;
            return map;
        }, {});
        let maxCount = 0;
        let mode = null;
        for (const val in frequencyMap) {
            if (frequencyMap[val] > maxCount) {
                maxCount = frequencyMap[val];
                mode = val;
            }
        }
        return { mode, count: maxCount };
    }


    freqDist() {
        const frequencyMap = this.age.reduce((map, val) => {
            map[val] = (map[val] || 0) + 1;
            return map;
        }, {});
        return Object.entries(frequencyMap).map(([val, count]) => ({ value: Number(val), count }));
    }
    var() {
        const mean = this.mean();
        const squaredDiff = this.age.map(val => Math.pow(val - mean, 2));
        return squaredDiff.reduce((acc, val) => acc + val, 0) / this.count();
    }
    std() {
        return Math.sqrt(this.var());
    }
    percentile(percentile) {
        const sortData = [...this.age].sort((a, b) => a - b);
        const index = Math.floor((percentile / 100) * this.count());
        return sortedData[index];
    }
    describe() {
        return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: ${JSON.stringify(this.mode())}\nVariance: ${this.var()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${JSON.stringify(this.freqDist())}`;
    }
}

console.log('Count:', Statistics.count()) // 25
console.log('Sum: ', Statistics.sum()) // 744
console.log('Min: ', Statistics.min()) // 24
console.log('Max: ', Statistics.max()) // 38
console.log('Range: ', Statistics.range()) // 14
console.log('Mean: ', Statistics.mean()) // 30
console.log('Median: ',Statistics.median()) // 29
console.log('Mode: ', Statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',Statistics.var()) // 17.5
console.log('Standard Deviation: ', Statistics.std()) // 4.2
console.log('Variance: ',Statistics.var()) // 17.5
console.log('Frequency Distribution: ',Statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// 🎉 CONGRATULATIONS ! 🎉

// << Day 14 | Day 16>>