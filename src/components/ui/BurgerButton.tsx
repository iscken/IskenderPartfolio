import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerButton.module.scss";
import { useState } from "react";

const BurgerButton = () => {
  const { isOpen, setIsOpen } = useHeaderStore();
  const [module, setModule] = useState(false);

  return (
    <div className={scss.BurgerButton} onClick={() => setIsOpen(!isOpen)}>
      <div className={scss.content}>
        {!module ? (
          <span onClick={() => setModule(true)} className={scss.span}>
            ...
          </span>
        ) : (
          <span onClick={() => setModule(false)} className={scss.span}>
            ❌
          </span>
        )}
      </div>
    </div>
  );
};

export default BurgerButton;
