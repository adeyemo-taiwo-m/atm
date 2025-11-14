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
      tab:px-6  px-3 tab:text-base text-sm py-4 tab:py-3 rounded-md text-white font-medium transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-600)] via-[var(--color-neutral-900)] to-[var(--color-neutral-900)]
     hover:from-[var(--color-neutral-500)] hover:via-[var(--color-neutral-800)] hover:to-[var(--color-neutral-900)]
    `,

    secondary: `
      tab:px-6 px-3 text-sm tab:text-base py-4 tab:py-3 rounded-md text-[var(--color-neutral-800)] font-medium border border-[var(--color-neutral-300)] transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-100)] to-[var(--color-neutral-300)]
      hover:from-[var(--color-neutral-200)] hover:to-[var(--color-neutral-400)]
    `,

    small: `
      px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-300
       bg-gradient-to-r from-[var(--color-neutral-600)] via-[var(--color-neutral-900)] to-[var(--color-neutral-900)]
     hover:from-[var(--color-neutral-500)] hover:via-[var(--color-neutral-800)] hover:to-[var(--color-neutral-900)]
    `,

    secondarySmall: `
      px-3 py-1.5 rounded-md text-[var(--color-neutral-800)] text-sm font-medium border border-[var(--color-neutral-300)] transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-100)] to-[var(--color-neutral-300)]
      hover:from-[var(--color-neutral-200)] hover:to-[var(--color-neutral-400)]
    `,

    whatsappLight: `
  flex items-center justify-center gap-2 px-4 py-2 rounded-md text-[var(--color-neutral-900)] font-medium 
  bg-white/70 backdrop-blur-sm border border-[#25D366] transition-all duration-300
  hover:bg-white
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
