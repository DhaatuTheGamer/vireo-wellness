
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { FoodItem, Device, DailyMealGroup, MealEntry, MealType } from '../types';
import { MOCK_FOOD_ITEMS, MOCK_DEVICES, MOCK_DAILY_MEALS_TODAY } from '../constants';

interface AppContextType {
  userMeals: DailyMealGroup[];
  addMealEntry: (mealType: MealType, foodItem: FoodItem, quantity: number) => void;
  devices: Device[];
  connectDevice: (deviceId: string) => void;
  disconnectDevice: (deviceId: string) => void;
  allFoodItems: FoodItem[];
  getFoodItemById: (id: string) => FoodItem | undefined;
  getDeviceById: (id: string) => Device | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userMeals, setUserMeals] = useState<DailyMealGroup[]>(MOCK_DAILY_MEALS_TODAY);
  const [devices, setDevices] = useState<Device[]>(MOCK_DEVICES);
  const allFoodItems = MOCK_FOOD_ITEMS;

  const addMealEntry = useCallback((mealType: MealType, foodItem: FoodItem, quantity: number) => {
    setUserMeals(prevMeals => {
      const newEntry: MealEntry = {
        id: `me-${Date.now()}`,
        foodItem,
        quantity,
        loggedAt: new Date().toISOString(),
      };

      const existingGroup = prevMeals.find(group => group.mealType === mealType);
      if (existingGroup) {
        return prevMeals.map(group =>
          group.mealType === mealType
            ? {
                ...group,
                entries: [...group.entries, newEntry],
                totalCalories: group.totalCalories + foodItem.calories * quantity,
              }
            : group
        );
      } else {
        return [
          ...prevMeals,
          {
            mealType,
            entries: [newEntry],
            totalCalories: foodItem.calories * quantity,
          },
        ];
      }
    });
  }, []);

  const connectDevice = useCallback((deviceId: string) => {
    setDevices(prevDevices =>
      prevDevices.map(d => (d.id === deviceId ? { ...d, isConnected: true } : d))
    );
  }, []);

  const disconnectDevice = useCallback((deviceId: string) => {
    setDevices(prevDevices =>
      prevDevices.map(d => (d.id === deviceId ? { ...d, isConnected: false } : d))
    );
  }, []);
  
  const getFoodItemById = useCallback((id: string): FoodItem | undefined => {
    return allFoodItems.find(item => item.id === id);
  }, [allFoodItems]);

  const getDeviceById = useCallback((id: string): Device | undefined => {
    return devices.find(device => device.id === id);
  }, [devices]);


  return (
    <AppContext.Provider value={{ userMeals, addMealEntry, devices, connectDevice, disconnectDevice, allFoodItems, getFoodItemById, getDeviceById }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
