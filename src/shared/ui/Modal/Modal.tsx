import { classNames } from "@/shared/lib/classNames/classNames";
import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import cls from "./Modal.module.scss";
import { Portal } from "@/shared/ui/Portal/Portal";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpened, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef(0);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = window.setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 200);
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpened) {
      window.addEventListener("keydown", onKeyDown, { once: true });
    }
    return () => {
      window.clearTimeout(timeRef.current);
      window.removeEventListener("keydown", () => {});
    };
  }, [isOpened, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpened,
    [cls.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div
        onClick={closeHandler}
        className={classNames(cls.modal, mods, [className])}
      >
        <div className={classNames(cls.overlay, {}, [])}>
          <div
            onClick={onContentClick}
            className={classNames(cls.content, {}, [])}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
