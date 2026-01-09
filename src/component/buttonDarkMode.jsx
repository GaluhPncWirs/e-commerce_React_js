import { useDarkMode } from "../context/darkMode";

export default function BtnDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  return (
    <div className="absolute top-7 right-10">
      <input type="checkbox" className="hidden" id="darkMode" />
      <label
        className="cursor-pointer"
        htmlFor="darkMode"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div
          className={`bg-blue-200 h-7 w-14 rounded-3xl p-1 ${
            isDarkMode && `bg-slate-400`
          }`}
        >
          <div className="core bg-blue-600 h-5 w-5 rounded-full transition-all duration-200"></div>
        </div>
      </label>
    </div>
  );
}
