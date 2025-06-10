
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const SettingsScreen: React.FC = () => {
  // Placeholder state for unit preferences - in a real app, this would come from context or persistent storage.
  const [glucoseUnit, setGlucoseUnit] = useState<'mg/dL' | 'mmol/L'>('mg/dL');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');

  return (
    <div className="flex flex-col h-full">
      <Header title="Settings" showBackButton backPath="/dashboard" />
      <main className="flex-grow overflow-y-auto p-4 space-y-6 bg-slate-800 transition-colors duration-300">
        <section>
          <h2 className="text-sm font-semibold text-slate-400 mb-3 px-1">General Settings</h2>
          <div className="bg-slate-700 rounded-lg shadow p-4 space-y-4">
            <div>
              <label htmlFor="glucoseUnit" className="block text-sm font-medium text-slate-200 mb-1">
                Glucose Units
              </label>
              <select
                id="glucoseUnit"
                name="glucoseUnit"
                value={glucoseUnit}
                onChange={(e) => setGlucoseUnit(e.target.value as 'mg/dL' | 'mmol/L')}
                className="w-full bg-slate-600 border border-slate-500 text-slate-200 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-slate-500"
              >
                <option value="mg/dL">mg/dL</option>
                <option value="mmol/L">mmol/L</option>
              </select>
            </div>

            <div>
              <label htmlFor="weightUnit" className="block text-sm font-medium text-slate-200 mb-1">
                Weight Units
              </label>
              <select
                id="weightUnit"
                name="weightUnit"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value as 'lbs' | 'kg')}
                className="w-full bg-slate-600 border border-slate-500 text-slate-200 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-slate-500"
              >
                <option value="lbs">lbs (Pounds)</option>
                <option value="kg">kg (Kilograms)</option>
              </select>
            </div>
             <p className="text-xs text-slate-400 pt-2">
              Selected units will be used for display and input throughout the application. (Functionality to apply these preferences app-wide is not yet implemented).
            </p>
          </div>
        </section>
        {/* Further settings sections can be added here */}
      </main>
      <BottomNav />
    </div>
  );
};

export default SettingsScreen;