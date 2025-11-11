import StarBorder from "./StarBorder";

function Button({ children, variant = "primary", className, type = "button" }) {
  const styles = {
    primary: `
      px-6 py-3 rounded-md text-white font-medium transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-400)] to-[var(--color-neutral-800)]
      hover:from-[var(--color-neutral-300)] hover:to-[var(--color-neutral-700)]
    `,

    secondary: `
      px-6 py-3 rounded-md text-[var(--color-neutral-800)] font-medium border border-[var(--color-neutral-300)] transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-100)] to-[var(--color-neutral-300)]
      hover:from-[var(--color-neutral-200)] hover:to-[var(--color-neutral-400)]
    `,

    small: `
      px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-400)] to-[var(--color-neutral-800)]
      hover:from-[var(--color-neutral-300)] hover:to-[var(--color-neutral-700)]
    `,

    secondarySmall: `
      px-3 py-1.5 rounded-md text-[var(--color-neutral-800)] text-sm font-medium border border-[var(--color-neutral-300)] transition-all duration-300
      bg-gradient-to-r from-[var(--color-neutral-100)] to-[var(--color-neutral-300)]
      hover:from-[var(--color-neutral-200)] hover:to-[var(--color-neutral-400)]
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
        type={type}
        className={`${styles[variant]} cursor-pointer ${className}`}
      >
        {children}
      </button>
    </StarBorder>
  );
}

export default Button;
