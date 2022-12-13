function sortByName(arr) {
  arr.sort((a, b) => {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });

  return arr;
}

function sortByNameReverse(arr) {
  arr.sort((a, b) => {
    return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
  });

  return arr;
}

export { sortByName, sortByNameReverse };
