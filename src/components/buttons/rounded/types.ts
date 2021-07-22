import { TextProps, TouchableOpacityProps } from 'react-native'

interface IButtonProps {
  label: string,
  backgroundColor: string,
  border?: string,
  borderRadius?: string,
  fontSize: string,
  color: string,
  fontWeight?: string,
  width?: number | string,
  margin?: string,
  icon?: any,
  iconSize?: number,
  handleOnPress(): void
}

interface IButtonStyleProps extends TouchableOpacityProps {
  backgroundColor: string,
  border?: string,
  borderRadius?: string,
  width?: number | string,
  margin?: string
}

interface IButtonTextStyleProps extends TextProps {
  fontSize: string,
  color: string,
  fontWeight?: string
}

export type {
  IButtonProps,
  IButtonStyleProps,
  IButtonTextStyleProps
}
