import styled from 'styled-components/native'
import { IButtonTextStyleProps, IButtonStyleProps } from './types'

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Button = styled.TouchableOpacity<IButtonStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => props.width ? props.width : '100%'};
  padding: 8px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0px'};
  border: ${props => props.border ? props.border : 'none'};
  margin: ${props => props.margin ? props.margin : '0'};
`
export const ButtonIcon = styled.View`
  flex: 0.7;
  width: 100%;
  align-items: center;
`
export const ButtonText = styled.Text<IButtonTextStyleProps>`
  flex: 1;
  align-items: flex-start;
  font-size: ${props => props.fontSize ? props.fontSize : '12px'};
  color: ${props => props.color ? props.color : '#33333'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
  text-align: center;
`
