'use strict';

const countTypesInArray = (arr) => {
  const typeCount = {};
  for (const elem of arr) {
    const type = typeof elem;
    const t = typeCount[type] || 0;
    typeCount[type] = t + 1;
  }
  return typeCount;
};

module.exports = { countTypesInArray };
