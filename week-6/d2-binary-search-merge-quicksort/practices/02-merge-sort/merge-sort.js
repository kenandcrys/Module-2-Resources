// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const half = math.floor(arr.length / 2);
  // Recursively sort the left half
  // Recursively sort the right half
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half))
  // Merge the halves together and return
  return merge(left,right)
  }


function merge(arrA, arrB) {

    let arr = []
  while (arrA.length && arrB.length) {
    if (arrA[0] < arrB[0]) {
      arr.push(arrA.shift())
    } else {
      arr.push(arrB.shift())
    }
  }
  return [...arr, ...arrA, ...arrB]
}

module.exports = [merge, mergeSort];
