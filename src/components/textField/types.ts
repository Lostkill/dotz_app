import { TextInputProps } from 'react-native'

interface ITextFieldProps extends TextInputProps {
  handleChange(name: string): void
  backgroundColor?: string,
  rounded?: string,
  outlined?: string,
  secureTextEntry?: boolean,
  placeholder: string,
  height: number | string,
  width: number | string
}

interface IStyleProps {
  backgroundColor?: string,
  rounded?: string,
  outlined?: string,
  height: number | string,
  width: number | string
}

export type { ITextFieldProps, IStyleProps }
