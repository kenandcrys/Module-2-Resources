function quicksort(Arr) {
  if (Arr.length <= 1) {
    return Arr;
  }
  const pivot = Arr[Arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < Arr.length - 1; i++) {
    Arr[i] < pivot ? leftArr.push(Arr[i]) : rightArr.push(Arr[i])
  }
  return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
}


module.exports = [quicksort];
