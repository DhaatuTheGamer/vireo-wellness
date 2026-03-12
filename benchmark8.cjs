const { performance } = require('perf_hooks');

const allFoodItems = Array.from({length: 10000}).map((_, i) => ({ id: `id${i}`, name: `Food ${i}`, calories: 100 }));
const selectedItems = { 'id500': { id: 'id500', name: 'Food 500', calories: 100, isSelected: true } };
const searchTerm = 'food';

const RUNS = 1000;

let oldTime = 0;
for(let i=0; i<RUNS; i++) {
    const start = performance.now();
    const foodItemsWithSelection = allFoodItems.map(item => ({
        ...item,
        isSelected: !!selectedItems[item.id],
    }));
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredFoodItems = foodItemsWithSelection.filter(item =>
      item.name.toLowerCase().includes(lowerSearchTerm)
    );
    // render
    filteredFoodItems.length;
    oldTime += performance.now() - start;
}

let newTime = 0;
for(let i=0; i<RUNS; i++) {
    const start = performance.now();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredFoodItems = allFoodItems.filter(item =>
      item.name.toLowerCase().includes(lowerSearchTerm)
    );
    // render map
    filteredFoodItems.map(item => ({...item, isSelected: !!selectedItems[item.id]})).length;
    newTime += performance.now() - start;
}

console.log(`Old Time: ${oldTime.toFixed(2)}ms`);
console.log(`New Time: ${newTime.toFixed(2)}ms`);
console.log(`Improvement: ${((oldTime - newTime) / oldTime * 100).toFixed(2)}%`);
