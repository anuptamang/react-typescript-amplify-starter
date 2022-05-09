import React from 'react'
import { Input } from 'antd'

interface Props {
  prefix?: React.ReactNode
  placeholder: string
  size?: 'large' | 'middle' | 'small' | undefined
  type?: string
  onChange?: any
  defaultValue?: any
  value?: any
  disabled?: boolean
  iconRender?: any
}

const CustomInput: React.FC<Props> = ({
  prefix,
  placeholder,
  size,
  type = 'text',
  onChange,
  disabled = false,
  ...restProps
}) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      prefix={prefix}
      type={type}
      className='customInput'
      {...restProps}
      onChange={onChange}
      disabled={disabled}
      style={{ backgroundColor: '#EFEFF5' }}
    />
  )
}

export default CustomInput
