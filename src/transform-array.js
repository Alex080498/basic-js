const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-next') {
        let res = array.slice(0, i) + "," + array.slice(i + 2);
        let newArr = res.split(',');
        return newArr;
    } else if (array[i] === '--discard-prev') {
        let res = array.slice(0, i - 1) + "," + array.slice(i + 1);
        let newArr = res.split(',');
        return newArr;
    } else if (array[i] === '--double-next') {
        let res= arr.slice(0, i) + "," + array[i + 1] + "," + array.slice(i + 1);
        let newArr = res.split(',');
        return newArr;
    } else if (array[i] === '--double-prev') {
        let res = arrat.slice(0, i) + "," + array[i - 1] + "," + array.slice(i + 1);
        let newArr = res.split(',');
        return newArr;
    }
}
};

