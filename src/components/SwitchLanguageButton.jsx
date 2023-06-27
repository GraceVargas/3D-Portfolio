import { useContext, useState } from "react";
import LocaleContext from "../context/LocaleContext";
import i18n from "../i18n";

const SwitchLanguageButton = () => {
  const { locale } = useContext(LocaleContext);
  const [isChecked, setIsChecked] = useState(false);

  const changeLocale = (l) => {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  };

  const toggleSwitch = () => {
    setIsChecked(!isChecked);

    isChecked ? changeLocale("en") : changeLocale("es");
  };

  return (
    <div className="flex">
      <span className="font-poppins font-medium text-[16px] mr-2">EN</span>
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
              isChecked ? "bg-gray-400" : "bg-gray-600"
            }`}
          />
          <div
            className={`dot absolute left-1 top-1  w-4 h-4 rounded-full transition ${
              isChecked
                ? "bg-gray-600 transform translate-x-full"
                : "bg-gray-400"
            }`}
          />
        </div>
      </label>
      <span className="font-poppins font-medium text-[16px] ml-2">ES</span>
    </div>
  );
};

export default SwitchLanguageButton;
