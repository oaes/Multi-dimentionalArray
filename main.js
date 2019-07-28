//Multiple array in js


var arr = [
    [80, 70, 88, 76, 76],
    [50, 87, 90, 87, 70],
    [40, 39, 83, 90, 40]
]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2]);

for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].length; j++) {

        console.log('Element' + i + ':' + arr[i][j]);
    }
}
