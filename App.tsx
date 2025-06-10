
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import DashboardScreen from './screens/DashboardScreen';
import DailyMealsScreen from './screens/DailyMealsScreen';
import AddMealScreen from './screens/AddMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import DevicesScreen from './screens/DevicesScreen';
import ConnectDeviceScreen from './screens/ConnectDeviceScreen';
import SettingsScreen from './screens/SettingsScreen';
import { AppContextProvider } from './contexts/AppContext';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="h-screen w-screen max-w-md mx-auto flex flex-col bg-slate-800 overflow-hidden transition-colors duration-300">
        <HashRouter>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/daily-meals" element={<DailyMealsScreen />} />
            <Route path="/add-meal" element={<AddMealScreen />} />
            <Route path="/meal/:foodId" element={<MealDetailScreen />} />
            <Route path="/devices" element={<DevicesScreen />} />
            <Route path="/connect-device/:deviceId" element={<ConnectDeviceScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </div>
    </AppContextProvider>
  );
};

export default App;