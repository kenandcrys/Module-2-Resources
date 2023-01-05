

// function selectionSort(arr) {

  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log
    // console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

// }

function selectionSort(arr) {
  arr1 = [...arr]
  arr2 = [];

  while (arr1.length) {
    console.log(arr2.join(","));
    let min = Infinity;
    let minIndex = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] < min) {
        min = arr1[i];
        minIndex = i;
      }
    }
    arr2.push(arr1.splice(minIndex, 1)[0])
  }
  return arr2;
}

// function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    // console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

// }

function selectionSortInPlace(arr) {
  let pointer = 0;

  while (pointer < arr.length) {
    console.log(arr.join(","));
    let min = Infinity;
    let minIndex = pointer;

    for (let i = minIndex; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }

    for (let i = minIndex; i > pointer; i--) {
      arr[i] = arr[i - 1];
    }
    arr[pointer] = min;
    pointer++;
  }
  return arr;
}
module.exports = [selectionSort, selectionSortInPlace];
