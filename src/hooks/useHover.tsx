
import { useState } from "react";

type HoverState = {
  [key: string]: boolean;
};

const useHover = () => {
  const [isHovered, setIsHovered] = useState<HoverState>({});

  const handleMouseEnter = (icon: string) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: true }));
  };

  const handleMouseLeave = (icon: string) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: false }));
  };

  return { isHovered, handleMouseEnter, handleMouseLeave };
};

export default useHover;
