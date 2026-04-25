import StarBorder from "./StarBorder";
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
      tab:px-6 px-4 tab:text-base text-sm py-4 tab:py-3 rounded-2xl text-white font-bold uppercase tracking-wider transition-all duration-300 transform
      bg-gradient-to-r from-violet-600 to-indigo-600
      hover:from-violet-500 hover:to-indigo-500
      hover:shadow-[0_0_20px_rgba(92,78,187,0.4)] hover:scale-105 active:scale-95
    `,

    secondary: `
      tab:px-6 px-4 text-sm tab:text-base py-4 tab:py-3 rounded-2xl text-[var(--color-dark)] font-bold uppercase tracking-wider border border-[var(--color-neutral-200)] transition-all duration-300 transform
      bg-white
      hover:bg-[var(--color-neutral-50)]
      hover:shadow-lg hover:scale-105 active:scale-95
    `,

    small: `
      px-4 py-2 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 transform
      bg-gradient-to-r from-violet-600 to-indigo-600
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

  return (
    <StarBorder
      as="div"
      className={`rounded-md ${className}`}
      color="grey"
      speed="5s"
      thickness={2}
    >
      <button
        onClick={onClick}
        type={type}
        className={`${styles[variant]} flex justify-center items-center gap-2 cursor-pointer ${className}`}
      >
        {children}
      </button>
    </StarBorder>
  );
}

export default Button;
