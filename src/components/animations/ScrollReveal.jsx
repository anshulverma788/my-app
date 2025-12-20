import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  className = "",
}) {
  const elementRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && elementRef.current) {
      const element = elementRef.current;

      const animations = {
        up: { y: 60, opacity: 0 },
        down: { y: -60, opacity: 0 },
        left: { x: 60, opacity: 0 },
        right: { x: -60, opacity: 0 },
        fade: { opacity: 0 },
      };

      gsap.fromTo(
        element,
        animations[direction] || animations.up,
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        }
      );
    }
  }, [inView, direction, delay, duration]);

  return (
    <div ref={ref} className={className}>
      <div ref={elementRef}>{children}</div>
    </div>
  );
}
