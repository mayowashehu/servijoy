const InputField = ({
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  rightElement,
  id,
  className = "",
}) => {
  return (
    <div className={`mb-5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-[10px] sm:text-xs sj-tag text-sj-muted mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center bg-sj-surface border border-sj-line rounded-xl px-4 py-3 focus-within:border-sj-brass/40 transition-colors">
        {icon && <span className="text-sj-muted mr-3 flex-shrink-0">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent outline-none text-sj-ink placeholder:text-sj-muted/50 text-sm min-w-0"
          aria-label={label || placeholder}
        />
        {rightElement}
      </div>
    </div>
  );
};

export default InputField;