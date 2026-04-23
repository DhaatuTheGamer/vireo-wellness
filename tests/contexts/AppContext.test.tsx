import { renderHook, act, waitFor } from '@testing-library/react';
import { AppContextProvider, useAppContext } from '../../contexts/AppContext';
import { ReactNode } from 'react';
import { vi } from 'vitest';
import * as mealService from '../../services/mealService';
import { MealType, FoodItem } from '../../types';

vi.mock('../../services/mealService', () => ({
  getMeals: vi.fn(),
  logMeal: vi.fn(),
  getMealDetails: vi.fn(),
}));

describe('AppContext - meal operations', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <AppContextProvider>{children}</AppContextProvider>
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch meals on initialization', async () => {
    const mockMeals = [
      {
        mealType: MealType.BREAKFAST,
        entries: [],
        totalCalories: 0,
      },
    ];
    vi.mocked(mealService.getMeals).mockResolvedValue(mockMeals);

    const { result } = renderHook(() => useAppContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.userMeals).toEqual(mockMeals);
    });

    expect(mealService.getMeals).toHaveBeenCalled();
  });

  it('should call mealService.logMeal when addMealEntry is called', async () => {
    const mockMeals = [];
    vi.mocked(mealService.getMeals).mockResolvedValue(mockMeals);
    vi.mocked(mealService.logMeal).mockResolvedValue({ id: 'new-id', foodItem: { id: '1' } });

    const { result } = renderHook(() => useAppContext(), { wrapper });

    const foodItem: FoodItem = { id: '1', name: 'Apple', calories: 95, carbs: 25, fat: 0.3, protein: 0.5, category: 'Fruit' };

    await act(async () => {
      await result.current.addMealEntry(MealType.BREAKFAST, foodItem, 1);
    });

    expect(mealService.logMeal).toHaveBeenCalledWith({
      foodItemId: '1',
      quantity: 1,
      mealType: MealType.BREAKFAST, // I'll need to update logMeal signature if needed
    });
  });
});

describe('AppContext - setWaterIntake', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <AppContextProvider>{children}</AppContextProvider>
  );

  beforeEach(() => {
    vi.mocked(mealService.getMeals).mockResolvedValue([]);
  });

  it('should set water intake to a positive value', async () => {
    const { result } = renderHook(() => useAppContext(), { wrapper });

    await waitFor(() => {
      expect(mealService.getMeals).toHaveBeenCalled();
    });

    act(() => {
      result.current.setWaterIntake(1500);
    });

    expect(result.current.waterIntake).toBe(1500);
  });

  it('should prevent negative water intake and set it to 0', async () => {
    const { result } = renderHook(() => useAppContext(), { wrapper });

    await waitFor(() => {
      expect(mealService.getMeals).toHaveBeenCalled();
    });

    act(() => {
      result.current.setWaterIntake(-500);
    });

    expect(result.current.waterIntake).toBe(0);
  });

  it('should correctly set water intake to exactly 0', async () => {
    const { result } = renderHook(() => useAppContext(), { wrapper });

    await waitFor(() => {
      expect(mealService.getMeals).toHaveBeenCalled();
    });

    act(() => {
      result.current.setWaterIntake(0);
    });

    expect(result.current.waterIntake).toBe(0);
  });
});

describe('useAppContext', () => {
  it('should throw an error when used outside of an AppContextProvider', () => {
    expect(() => renderHook(() => useAppContext())).toThrow(
      'useAppContext must be used within an AppContextProvider'
    );
  });
});
