export default function LayoutForm(props) {
  const { children, title, desc, darkMode } = props;
  return (
    <div className={`w-full max-w-sm text-black ${darkMode && `text-white`}`}>
      <h1
        className={`text-blue-700 font-bold text-4xl mb-5 ${
          darkMode && `text-blue-400`
        }`}
      >
        {title}
      </h1>
      <p>{desc}</p>
      {children}
    </div>
  );
}
