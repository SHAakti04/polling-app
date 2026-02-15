export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        glass
        px-3 py-2
        rounded-lg
        text-sm
        hover:scale-105
        transition
      "
      aria-label="Toggle theme"
    >
      🌙 / ☀️
    </button>
  );
}
