import React from 'react'

import * as S from './styles'

interface ButtonTypes {
  children?: React.ReactNode
  text: string
  type: 'button' | 'reset' | 'submit'
  onClick: () => void
  className?: string
}

const Button: React.FunctionComponent<ButtonTypes> = ({
  text,
  type,
  className,
  onClick,
}) => (
  <S.Container type={type} onClick={onClick} className={className}>
    {text}
  </S.Container>
)

export default Button
