
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from '../components/Header';
import { useAppContext } from '../contexts/AppContext';
import { FoodItem, MealType } from '../types';
import { Flame, Wheat, Droplet, Beef } from 'lucide-react';

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
    return <div className="flex justify-center items-center h-full bg-slate-950 text-slate-100">Loading...</div>;
  }

  if (!foodItem) {
    return <div className="flex justify-center items-center h-full bg-slate-950 text-slate-100">Food item not found.</div>;
  }

  const nutritionalInfo = [
    { label: 'Calories', value: `${foodItem.calories} kcal`, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: 'Carbs', value: `${foodItem.carbs} g`, icon: Wheat, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Fat', value: `${foodItem.fat} g`, icon: Droplet, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Protein', value: `${foodItem.protein} g`, icon: Beef, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  ];

  return (
    <div className="flex flex-col md:flex-row h-full bg-slate-950 flex-1 w-full overflow-hidden relative">
      <div className="flex flex-col flex-1 w-full overflow-hidden order-1 md:order-2">
        <Header title="Details" showBackButton />
      <main className="flex-1 overflow-y-auto pb-32 md:pb-5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-72 md:h-96"
        >
          <img 
            src={foodItem.imageUrl || `https://picsum.photos/seed/${foodItem.id}/600/400`} 
            alt={foodItem.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </motion.div>

        <div className="px-5 -mt-12 relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-6"
          >
            {foodItem.name}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6"
          >
            {nutritionalInfo.map((info, idx) => (
              <motion.div 
                key={info.label} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center gap-3"
              >
                <div className={`p-2.5 rounded-xl ${info.bg}`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">{info.label}</p>
                  <p className="text-base font-bold text-white">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 border border-slate-800 p-5 rounded-3xl mt-6"
          >
            <h2 className="text-lg font-bold text-white mb-3">About</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {foodItem.description || 'No description available for this item. A healthy choice for your daily diet.'}
            </p>
          </motion.div>
        </div>
      </main>
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent pt-12 pb-safe md:static md:bg-none md:p-5 md:pt-0"
      >
        <button
          onClick={handleAddMeal}
          className="w-full max-w-4xl mx-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 px-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 active:scale-[0.98] block"
        >
          Add to {targetMealTypeFromState ? targetMealTypeFromState.replace('_', ' ') : 'Meal'}
        </button>
      </motion.div>
      </div>
    </div>
  );
};

export default MealDetailScreen;