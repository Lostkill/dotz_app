import React from 'react'
import styled from 'styled-components/native'
import { ITextFieldProps, IStyleProps } from './types'

const Wrapper = styled.View`
  padding-vertical: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Input = styled.TextInput<IStyleProps>`
  height: ${props => props.height ? props.height : 45};
  width: ${props => props.width ? props.width : '100%'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  border-radius: ${props => props.rounded ? props.rounded : '0px'};
  border: ${props => props.outlined ? '1px solid #69e6bf' : 'none'};
  text-align: left;
  padding-vertical: 5px;
  padding-horizontal: 10px;
  color: #333333;
`

const TextField: React.FC<ITextFieldProps> = (props) => {
  return (
    <Wrapper >
      <Input
        onChangeText={props.handleChange}
        backgroundColor={props.backgroundColor}
        rounded={props.rounded}
        outlined={props.outlined}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        width={props.width}
        height={props.height}
      />
    </Wrapper>
  )
}

export { TextField }
