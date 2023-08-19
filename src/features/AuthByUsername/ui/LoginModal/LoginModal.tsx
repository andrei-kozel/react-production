import { classNames } from "@/shared/lib/classNames/classNames"
import cls from './LoginModal.module.scss'
import { LoginForm } from "../LoginForm/LoginForm"
import { Modal } from "@/shared/ui/Modal/Modal"

interface loginModalProps {
  isOpen?: boolean,
  onClose?: () => void,
  className?: string
}


export const LoginModal = ({ className, isOpen, onClose }: loginModalProps) => {
  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}
