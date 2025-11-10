import SplitText from "../../ui/SplitText";

function HeroText({ children, className, duration = 0.1 }) {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <SplitText
        text={children}
        className={className}
        delay={100}
        duration={duration}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default HeroText;
