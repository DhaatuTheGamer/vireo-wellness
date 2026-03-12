const { performance } = require('perf_hooks');

const RUNS = 10000;

const widgets = [
  { id: 'eaten', title: 'Eaten Summary', visible: true },
  { id: 'water', title: 'Water Intake', visible: true },
  { id: 'glucose', title: 'Glucose Stat', visible: true },
  { id: 'pills', title: 'Pills Stat', visible: true },
  { id: 'activity', title: 'Activity Stat', visible: true },
  { id: 'carbs', title: 'Carbs Stat', visible: true },
  { id: 'chart', title: 'Blood Sugar Chart', visible: true },
];

const widgetMap = widgets.reduce((acc, widget) => {
    acc[widget.id] = widget;
    return acc;
}, {});

let oldTime = 0;
for(let i=0; i<RUNS; i++) {
    const start = performance.now();

    const r = ['glucose', 'pills', 'activity', 'carbs']
      .map(id => widgetMap[id])
      .filter(Boolean);

    oldTime += performance.now() - start;
}

let newTime = 0;
for(let i=0; i<RUNS; i++) {
    const start = performance.now();

    const r = [];
    if (widgetMap['glucose']) r.push(widgetMap['glucose']);
    if (widgetMap['pills']) r.push(widgetMap['pills']);
    if (widgetMap['activity']) r.push(widgetMap['activity']);
    if (widgetMap['carbs']) r.push(widgetMap['carbs']);

    newTime += performance.now() - start;
}

console.log(`Old Time: ${oldTime.toFixed(2)}ms`);
console.log(`New Time: ${newTime.toFixed(2)}ms`);
console.log(`Improvement: ${((oldTime - newTime) / oldTime * 100).toFixed(2)}%`);
