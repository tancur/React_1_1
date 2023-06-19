import { useState } from "react";

const Spoiler = ({ header = "Тупой заголовок 2", open, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  const onCklickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={onCklickHandler}>{header}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Spoiler;
