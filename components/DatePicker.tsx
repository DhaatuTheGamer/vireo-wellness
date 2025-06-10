
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
  const [currentMonthDates, setCurrentMonthDates] = useState<Date[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const today = new Date();
    const datesArray: Date[] = [];
    const centerDate = selectedDate || today;
    for (let i = -10; i <= 10; i++) { 
      const date = new Date(centerDate);
      date.setDate(centerDate.getDate() + i);
      datesArray.push(date);
    }
    setCurrentMonthDates(datesArray);
  }, [selectedDate]);

 useEffect(() => {
    if (scrollContainerRef.current) {
      const selectedEl = scrollContainerRef.current.querySelector('.bg-emerald-500'); 
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentMonthDates, selectedDate]);


  const formatDate = (date: Date) => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return {
      dayName: days[date.getDay()],
      dayNumber: date.getDate().toString(),
    };
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="flex items-center justify-center py-3 px-2 bg-slate-800 border-b border-slate-600 transition-colors duration-300">
      <button onClick={() => handleScroll('left')} className="p-2 text-slate-400 hover:text-slate-100">
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-3 px-2 no-scrollbar mx-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {currentMonthDates.map((date, index) => {
          const { dayName, dayNumber } = formatDate(date);
          const isSelected = isSameDay(date, selectedDate);
          const isToday = isSameDay(date, new Date());

          return (
            <button
              key={index}
              onClick={() => onDateChange(date)}
              className={`flex flex-col items-center justify-center w-12 h-16 rounded-lg p-2 transition-all duration-200 ease-in-out
                ${isSelected ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}
                ${isToday && !isSelected ? 'border-2 border-emerald-500' : 'border-2 border-transparent'} 
              `}
            >
              <span className={`text-xs ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>{dayName}</span>
              <span className={`font-bold text-lg ${isSelected ? 'text-white' : 'text-slate-200'}`}>{dayNumber}</span>
            </button>
          );
        })}
      </div>
       <button onClick={() => handleScroll('right')} className="p-2 text-slate-400 hover:text-slate-100">
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default DatePicker;