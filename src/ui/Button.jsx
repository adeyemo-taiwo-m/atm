function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "px-6 py-3 rounded-md text-white font-medium transition-all duration-300 " +
      "bg-gradient-to-r from-[#b1b2b2] to-[#363939] hover:from-[#d2d3d3] hover:to-[#57595a]",

    secondary:
      "px-6 py-3 rounded-md text-neutral-900 font-medium border border-neutral-300 transition-all duration-300 " +
      "bg-gradient-to-r from-[#f6f6f6] to-[#d2d3d3] hover:from-[#eaeaea] hover:to-[#b1b2b2]",

    small:
      "px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 " +
      "bg-gradient-to-r from-[#b1b2b2] to-[#363939] hover:from-[#d2d3d3] hover:to-[#57595a]",

    secondarySmall:
      "px-3 py-1.5 rounded-md text-neutral-900 text-sm font-medium border border-neutral-300 transition-all duration-300 " +
      "bg-gradient-to-r from-[#f6f6f6] to-[#d2d3d3] hover:from-[#eaeaea] hover:to-[#b1b2b2]",
  };

  return (
    <button className={`cursor-pointer ${styles[variant]}`}>{children}</button>
  );
}

export default Button;
