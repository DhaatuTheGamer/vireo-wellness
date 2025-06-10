
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BloodSugarReading } from '../types';

interface BloodSugarChartProps {
  data: BloodSugarReading[];
}

const BloodSugarChart: React.FC<BloodSugarChartProps> = ({ data }) => {
  const formattedData = data.map(reading => ({
    ...reading,
    time: new Date(reading.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    beforeMeal: reading.type === 'before_meal' ? reading.value : null,
    afterMeal: reading.type === 'after_meal' ? reading.value : null,
  }));

  return (
    <div className="p-4 bg-slate-700 rounded-lg shadow transition-colors duration-300">
      <h3 className="text-lg font-semibold mb-3 text-slate-100">Blood Sugar</h3>
      <p className="text-xs text-slate-400 mb-1">Avg this week: <span className="text-slate-100 font-medium">120 mg/dL</span></p>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <LineChart
            data={formattedData}
            margin={{
              top: 5,
              right: 10,
              left: -20, 
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-600" />
            <XAxis dataKey="time" className="stroke-slate-400" tick={{ fontSize: 10 }} />
            <YAxis className="stroke-slate-400" tick={{ fontSize: 10 }} domain={[60, 180]} />
            <Tooltip 
                wrapperClassName="shadow-lg rounded-md !bg-opacity-90 backdrop-blur-sm"
            />
            <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
            <Line type="monotone" dataKey="beforeMeal" name="Before Meal" stroke="#34d399" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} connectNulls /> {/* emerald-400 */}
            <Line type="monotone" dataKey="afterMeal" name="After Meal" stroke="#22d3ee" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} connectNulls /> {/* cyan-400 */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BloodSugarChart;