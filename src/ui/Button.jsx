import { FaWhatsapp } from "react-icons/fa";

function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}) {
  const styles = {
    primary:
      "tab:px-6 px-3 tab:text-sm text-xs py-4 tab:py-3 rounded-2xl text-[var(--color-neutral-100)] font-bold uppercase tracking-wider transition-all duration-300 transform bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] border border-[var(--color-border)] whitespace-nowrap hover:shadow-[0_0_20px_var(--color-shadow)] hover:scale-105 active:scale-95",

    secondary:
      "tab:px-6 px-3 text-xs tab:text-sm py-4 tab:py-3 rounded-2xl text-[var(--color-dark)] font-bold uppercase tracking-wider border border-[var(--color-neutral-200)] transition-all duration-300 transform bg-[var(--color-white)] whitespace-nowrap hover:bg-[var(--color-neutral-100)] hover:shadow-lg hover:scale-105 active:scale-95",

    small:
      "px-4 py-2 rounded-xl text-[var(--color-neutral-100)] text-xs font-bold uppercase tracking-wider transition-all duration-300 transform bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] border border-[var(--color-border)] hover:shadow-md hover:scale-105 active:scale-95",

    secondarySmall:
      "px-4 py-2 rounded-xl text-[var(--color-dark)] text-xs font-bold uppercase tracking-wider border border-[var(--color-neutral-200)] bg-[var(--color-white)] transition-all duration-300 transform hover:bg-[var(--color-neutral-100)] hover:shadow-md hover:scale-105 active:scale-95",

    whatsappLight:
      "flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-[var(--color-neutral-900)] font-bold text-xs uppercase tracking-wider bg-[var(--color-white)]/70 backdrop-blur-sm border border-[#25D366] transition-all duration-300 transform hover:bg-[var(--color-white)] hover:shadow-lg hover:scale-105 active:scale-95",
  };

  const getFlowColor = () => {
    if (
      variant === "secondary" ||
      variant === "secondarySmall" ||
      variant === "whatsappLight"
    ) {
      return "rgba(0, 0, 0, 0.1)"; // Dark flow for light buttons
    }
    return "rgba(255, 255, 255, 0.15)"; // Light flow for dark buttons
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles[variant]} flex justify-center items-center gap-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
