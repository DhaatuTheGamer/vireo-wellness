
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useAppContext } from '../contexts/AppContext';
import { FoodItem, MealType } from '../types';

const MealDetailScreen: React.FC = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { getFoodItemById, addMealEntry } = useAppContext();
  const [foodItem, setFoodItem] = useState<FoodItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const targetMealTypeFromState = location.state?.targetMealType as MealType | undefined;
  const selectedDateFromState = location.state?.selectedDate as string | undefined;


  useEffect(() => {
    if (foodId) {
      const item = getFoodItemById(foodId);
      if (item) {
        setFoodItem(item);
      }
    }
    setIsLoading(false);
  }, [foodId, getFoodItemById]);

  const handleAddMeal = () => {
    if (foodItem) {
      const mealTypeToAdd = targetMealTypeFromState || MealType.SNACK; 
      addMealEntry(mealTypeToAdd, foodItem, 1); 
      navigate('/daily-meals', { state: { date: selectedDateFromState } });
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-full bg-slate-800 text-slate-100 transition-colors duration-300">Loading...</div>;
  }

  if (!foodItem) {
    return <div className="flex justify-center items-center h-full bg-slate-800 text-slate-100 transition-colors duration-300">Food item not found.</div>;
  }

  const nutritionalInfo = [
    { label: 'Calories', value: `${foodItem.calories} kcal` },
    { label: 'Carbs', value: `${foodItem.carbs} g` },
    { label: 'Fat', value: `${foodItem.fat} g` },
    { label: 'Protein', value: `${foodItem.protein} g` },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-800 transition-colors duration-300">
      <Header title="Details" showBackButton />
      <main className="flex-grow overflow-y-auto">
        <img 
          src={foodItem.imageUrl || `https://picsum.photos/seed/${foodItem.id}/600/400`} 
          alt={foodItem.name} 
          className="w-full h-64 object-cover" 
        />

        <div className="p-4">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">{foodItem.name}</h1>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 my-4">
            {nutritionalInfo.map(info => (
              <div key={info.label} className="bg-slate-700 p-3 rounded-md shadow">
                <p className="text-xs text-slate-400">{info.label}</p>
                <p className="text-base font-medium text-slate-100">{info.value}</p>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-slate-100 mt-6 mb-2">About</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {foodItem.description || 'No description available for this item.'}
          </p>
        </div>
      </main>
      <div className="p-4 bg-slate-700 border-t border-slate-600 transition-colors duration-300">
        <button
          onClick={handleAddMeal}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MealDetailScreen;