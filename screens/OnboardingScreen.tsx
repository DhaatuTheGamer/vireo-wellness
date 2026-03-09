import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Target, Activity, Scale } from 'lucide-react';

const OnboardingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [diabetesType, setDiabetesType] = useState('');
  const [targetGlucose, setTargetGlucose] = useState([80, 130]);
  const [weightGoal, setWeightGoal] = useState('');

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 p-6 relative overflow-hidden flex-1 w-full">
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-8 mb-8 flex justify-between items-center relative z-10">
        <div className="flex gap-2 w-full">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-emerald-500' : 'bg-slate-800'}`} />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col relative z-10 max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <h1 className="text-3xl font-bold text-white mb-2">What is your diabetes type?</h1>
              <p className="text-slate-400 mb-8">This helps us personalize your insights and recommendations.</p>
              
              <div className="space-y-3">
                {['Type 1', 'Type 2', 'Gestational', 'Prediabetes', 'None (Just tracking)'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setDiabetesType(type)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${diabetesType === type ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Activity className={`w-5 h-5 ${diabetesType === type ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className="font-medium">{type}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <h1 className="text-3xl font-bold text-white mb-2">Target Glucose Range</h1>
              <p className="text-slate-400 mb-8">Set your ideal fasting blood sugar range (mg/dL).</p>
              
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400 font-medium">Min</span>
                  <span className="text-2xl font-bold text-emerald-400">{targetGlucose[0]}</span>
                </div>
                <input 
                  type="range" 
                  min="60" max="100" 
                  value={targetGlucose[0]} 
                  onChange={(e) => setTargetGlucose([parseInt(e.target.value), targetGlucose[1]])}
                  className="w-full accent-emerald-500 mb-8"
                />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400 font-medium">Max</span>
                  <span className="text-2xl font-bold text-rose-400">{targetGlucose[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="100" max="200" 
                  value={targetGlucose[1]} 
                  onChange={(e) => setTargetGlucose([targetGlucose[0], parseInt(e.target.value)])}
                  className="w-full accent-rose-500"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <h1 className="text-3xl font-bold text-white mb-2">What's your weight goal?</h1>
              <p className="text-slate-400 mb-8">We'll adjust your daily calorie and GL targets accordingly.</p>
              
              <div className="space-y-3">
                {[
                  { id: 'lose', label: 'Lose Weight', desc: 'Caloric deficit' },
                  { id: 'maintain', label: 'Maintain Weight', desc: 'Maintenance calories' },
                  { id: 'gain', label: 'Gain Weight', desc: 'Caloric surplus' }
                ].map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setWeightGoal(goal.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${weightGoal === goal.id ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Scale className={`w-5 h-5 ${weightGoal === goal.id ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <div>
                        <div className="font-medium">{goal.label}</div>
                        <div className={`text-xs mt-0.5 ${weightGoal === goal.id ? 'text-emerald-500/70' : 'text-slate-500'}`}>{goal.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto mb-8 flex gap-3">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={nextStep}
            disabled={(step === 1 && !diabetesType) || (step === 3 && !weightGoal)}
            className="flex-1 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold py-4 px-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {step === 3 ? 'Finish Setup' : 'Continue'}
            {step < 3 && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
