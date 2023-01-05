function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let saved = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = saved
        console.log(arr.join(","));
      }
    }
  }
}
  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning



module.exports = bubbleSort;
