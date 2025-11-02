export default function ButtonComponent({
  children,
  handleClick,
  darkMode,
  primaryColor,
  darkColor,
  buttonName,
}) {
  const finalButtonName = buttonName || "no-name";
  const baseStyle =
    "px-4 py-2 rounded-md text-white flex items-center gap-1 cursor-pointer";
  const lightStyle = `${primaryColor}`;
  const darkStyle = `${darkColor}`;
  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${darkMode ? darkStyle : lightStyle}`}
      name={finalButtonName}
    >
      {children}
    </button>
  );
}
