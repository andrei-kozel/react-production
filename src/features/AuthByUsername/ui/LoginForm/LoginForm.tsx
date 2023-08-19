import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import Button from "@/shared/ui/Button/Button"
import cls from './LoginForm.module.scss'
import { Input } from "@/shared/ui/Input/Input"

interface LoginFormProps {
  clasName?: string
}

export const LoginForm = ({ clasName }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [clasName])}>
      <Input autofocus type="text" autoFocus className={cls.input} placeholder={t('Username')} />
      <Input type="text" autoFocus className={cls.input} placeholder={t('Password')} />
      <Button className={cls.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  )
}