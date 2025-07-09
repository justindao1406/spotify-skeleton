import { useRef } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

export default function useTiltCard() {
  gsap.registerPlugin(CustomEase);
  CustomEase.create("cubic-bezier", "0.3, 0.98, 0.52, 0.99");

  const cardRef = useRef(null); // references our card div
  const holdTimeout = useRef(null); // references how long we hold the mouse down
  const isHolding = useRef(false); // references whether we are holding the mouse down
  const glareRef = useRef(null); // references our glare lighting

  // for Mouse events

  const handleMouseDown = (e) => {
    holdTimeout.current = setTimeout(() => {
      isHolding.current = true;
      triggerTilt(e);
      document.body.style.cursor = "grabbing";
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden"; // triggers as soon as 500ms passes (rather than when the user has to move the mouse)
    }, 100);
  };

  const handleMouseMove = (e) => {
    if (isHolding.current) {
      triggerTilt(e);
    }
  };

  // for Touch events (basically the same as mouse events)

  const handleTouchStart = (e) => {
    holdTimeout.current = setTimeout(() => {
      isHolding.current = true;
      triggerTilt(e);
    }, 500);
  };

  const onTouchMove = (e) => {
    if (isHolding.current) {
      triggerTilt(e);
    }
  };

  // detrigger tilt function

  const cancelTilt = () => {
    clearTimeout(holdTimeout.current);
    isHolding.current = false;
    document.body.style.cursor = "default";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    deTriggerTilt();
  };

  // gsap trigger tilt function

  const triggerTilt = (e) => {
    const card = cardRef.current; // always get the current card's passive value
    const glare = glareRef.current;

    const rect = card.getBoundingClientRect(); // get dimensions of the card (relative to viewport)

    const mouseX = e.clientX; // get mouse position (relative to viewport)
    const mouseY = e.clientY;

    const percentX = (mouseX - rect.left) / rect.width; // get a value from 0 to 1 (relative to card)
    const percentY = (mouseY - rect.top) / rect.height;

    const glareX = percentX * 200; // get percentage of mouse position
    const glareY = percentY * 200;

    const cx = rect.left + rect.width / 2; // center of card (x)
    const cy = rect.top + rect.height / 2; // center of card (y)

    const dx = mouseX - cx; // distance between mouse and center of card (x)
    const dy = mouseY - cy; // distance between mouse and center of card (y)

    const tiltX = (dy / cy) * 20; // get degree of tilt for x axis
    const tiltY = (-dx / cx) * 20; // get degree of tilt for y axis

    gsap.to(card, {
      duration: 0.15,
      ease: "cubic-bezier",
      overwrite: true,
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
    });

    gsap.to(glare, {
      duration: 0.15,
      ease: "cubic-bezier",
      xPercent: -50, // position the mouse to the center of the glare
      yPercent: -50,
      x: glareX,
      y: glareY,
      opacity: 1,
    });
  };

  const deTriggerTilt = () => {
    const card = cardRef.current; // always get the current card's passive value
    const glare = glareRef.current;

    gsap.to(card, {
      duration: 0.5,
      ease: "cubic-bezier",
      overwrite: true,
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)", // reset scale and rotation
    });

    gsap.to(glare, {
      duration: 0.15,
      ease: "none",
      xPercent: 0,
      yPercent: 0,
      x: -500,
      y: -500,
      opacity: 0,
    });
  };

  return {
    cardRef,
    glareRef,
    handleMouseDown,
    handleMouseMove,
    handleTouchStart,
    onTouchMove,
    cancelTilt,
    triggerTilt,
    deTriggerTilt,
  };
}
