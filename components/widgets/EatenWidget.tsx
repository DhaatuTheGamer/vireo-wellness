import React from 'react';
import { motion } from 'framer-motion';

interface EatenWidgetProps {
  stats: {
    eatenGL: number;
    totalGL: number;
  };
  eatenPercentage: number;
  delay: number;
}

const EatenWidget: React.FC<EatenWidgetProps> = ({ stats, eatenPercentage, delay }) => {
  return (
    <motion.div
      key="eaten"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="bg-linear-to-br from-emerald-900/40 to-slate-900 border border-emerald-800/30 p-6 rounded-3xl shadow-lg relative overflow-hidden mb-6"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="flex justify-between items-center relative z-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Eaten</h2>
          <p className="text-sm font-medium text-emerald-200/70">{stats.eatenGL} GL of {stats.totalGL} GL</p>
        </div>
        <div className="relative w-20 h-20" role="progressbar" aria-valuenow={Math.round(eatenPercentage)} aria-valuemin={0} aria-valuemax={100} aria-label={`Nutritional goal ${Math.round(eatenPercentage)}% complete`}>
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-800/80"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <motion.path
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: `${eatenPercentage}, 100` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="text-emerald-400"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{Math.round(eatenPercentage)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EatenWidget;
