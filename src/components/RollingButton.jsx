export default function RollingButton({
  text = "Get Quote",
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        px-6 py-2
        rounded-[6px]
        bg-[var(--primary)]
        text-white font-medium
        transition-all duration-300
        active:bg-[var(--active)]
        ${className}
      `}
    >
      <span className="relative block h-6 overflow-hidden">
        <span
          className="
            inline-block
            transition-transform
            duration-300
            hover:translate-y-full
            after:content-[attr(data-text)]
            after:absolute
            after:left-0
            after:-top-full
            after:w-full
          "
          data-text={text}
        >
          {text}
        </span>
      </span>
    </button>
  );
}
