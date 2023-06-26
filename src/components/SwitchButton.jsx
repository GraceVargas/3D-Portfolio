import { useState } from 'react';

const SwitchButton = ({ handleSwitch }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    handleSwitch 
  };

  return (
    <label className="flex items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <div
          className={`block w-10 h-6 bg-gray-300 rounded-full shadow-inner ${
            isChecked ? 'bg-blue-500' : 'bg-gray-400'
          }`}
        />
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
            isChecked ? 'transform translate-x-full' : ''
          }`}
        />
      </div>
      <span className="ml-2 text-gray-700">Toggle language</span>
    </label>
  );
};

export default SwitchButton;
