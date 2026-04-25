import { FaWhatsapp } from "react-icons/fa";

function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}) {
  const styles = {
    primary: `
      tab:px-6 px-3 tab:text-sm text-xs py-4 tab:py-3 rounded-2xl text-white font-bold uppercase tracking-wider transition-all duration-300 transform
      bg-gradient-to-r from-violet-600 to-indigo-600 border border-transparent whitespace-nowrap
      hover:from-violet-500 hover:to-indigo-500
      hover:shadow-[0_0_20px_rgba(92,78,187,0.4)] hover:scale-105 active:scale-95
    `,

    secondary: `
      tab:px-6 px-3 text-xs tab:text-sm py-4 tab:py-3 rounded-2xl text-[var(--color-dark)] font-bold uppercase tracking-wider border border-[var(--color-neutral-200)] transition-all duration-300 transform
      bg-white whitespace-nowrap
      hover:bg-[var(--color-neutral-50)]
      hover:shadow-lg hover:scale-105 active:scale-95
    `,

    small: `
      px-4 py-2 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 transform
      bg-gradient-to-r from-violet-600 to-indigo-600 border border-transparent
      hover:shadow-md hover:scale-105 active:scale-95
    `,

    secondarySmall: `
      px-4 py-2 rounded-xl text-[var(--color-dark)] text-xs font-bold uppercase tracking-wider border border-[var(--color-neutral-200)] bg-white transition-all duration-300 transform
      hover:bg-[var(--color-neutral-50)]
      hover:shadow-md hover:scale-105 active:scale-95
    `,

    whatsappLight: `
      flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-[var(--color-neutral-900)] font-bold text-xs uppercase tracking-wider
      bg-white/70 backdrop-blur-sm border border-[#25D366] transition-all duration-300 transform
      hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95
    `,
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
