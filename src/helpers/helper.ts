export function doubleNumber(dominoes: number[][]) {
  let count = 0;
  for (const domino of dominoes) {
    if (domino[0] === domino[1]) count++;
  }
  return count;
}

export function sortAsc(dominoes: number[][]) {
  const result = dominoes;

  for (let i = 0; i < dominoes.length - 1; i++) {
    let min = i;
    let currTot = result[min][0] + result[min][1];

    for (let j = i; j < dominoes.length; j++) {
      const compareTot = result[j][0] + result[j][1];
      if (currTot > compareTot) {
        min = j;
        currTot = compareTot;
      }
    }

    if (min != i) {
      let swap = result[i];
      result[i] = result[min];
      result[min] = swap;
    }
  }

  // order for equal totals
  for (let i = 0; i < dominoes.length - 1; i++) {
    let min = i;
    let currTot = result[min][0] + result[min][1];

    for (let j = i; j < dominoes.length; j++) {
      const compareTot = result[j][0] + result[j][1];
      if (currTot !== compareTot) break;
      if (currTot === compareTot) {
        const smallest = Math.min(...result[min], ...result[j]);
        if (result[j].includes(smallest)) {
          min = j;
          currTot = compareTot;
        }
      }
      if (min != i) {
        let swap = result[i];
        result[i] = result[min];
        result[min] = swap;
      }
    }
  }

  return result;
}
export function sortDesc(dominoes: number[][]) {
  const result = dominoes;

  for (let i = 0; i < dominoes.length - 1; i++) {
    let max = i;
    let currTot = result[max][0] + result[max][1];

    for (let j = i; j < dominoes.length; j++) {
      const compareTot = result[j][0] + result[j][1];
      if (currTot < compareTot) {
        max = j;
        currTot = compareTot;
      }
    }

    if (max != i) {
      let swap = result[i];
      result[i] = result[max];
      result[max] = swap;
    }
  }

  // order for equal totals
  for (let i = 0; i < dominoes.length - 1; i++) {
    let max = i;
    let currTot = result[max][0] + result[max][1];

    for (let j = i; j < dominoes.length; j++) {
      const compareTot = result[j][0] + result[j][1];
      if (currTot !== compareTot) break;
      if (currTot === compareTot) {
        const largest = Math.max(...result[max], ...result[j]);
        if (result[j].includes(largest)) {
          max = j;
          currTot = compareTot;
        }
      }
      if (max != i) {
        let swap = result[i];
        result[i] = result[max];
        result[max] = swap;
      }
    }
  }

  return result;
}

export function flip(dominoes: number[][]) {
  const result = dominoes;

  for (const domino of result) {
    const swap = domino[0];
    domino[0] = domino[1];
    domino[1] = swap;
  }

  return result;
}

export function remove(dominoes: number[][], total: number) {
  const result = dominoes.filter((domino) => {
    const domTotal = domino[0] + domino[1];
    return domTotal != total;
  });

  return result;
}

export function removeDupes(dominoes: number[][]) {
  const deleteIndexes: number[] = [];

  for (let i = 0; i < dominoes.length - 1; i++) {
    if (deleteIndexes.includes(i)) {
      continue;
    }
    const sortedDomino1 = JSON.stringify(dominoes[i].toSorted((a, b) => a - b));
    for (let j = i + 1; j < dominoes.length; j++) {
      if (deleteIndexes.includes(j)) {
        continue;
      }
      const sortedDomino2 = JSON.stringify(
        dominoes[j].toSorted((a, b) => a - b),
      );

      if (sortedDomino1 === sortedDomino2) {
        if (!deleteIndexes.includes(j)) {
          deleteIndexes.push(j);
        }
        if (!deleteIndexes.includes(i)) {
          deleteIndexes.push(i);
        }
      }
    }
  }

  const result = dominoes.filter((_, index) => !deleteIndexes.includes(index));
  return result;
}
