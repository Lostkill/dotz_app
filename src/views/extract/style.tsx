import styled from 'styled-components/native'
import { IStyleProps } from './types'

export const Wrapper = styled.View`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const HeaderWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #fbbc21;
`

export const AmountBalanceWrapper = styled.View`
  position: absolute;
  z-index: 1000000;
  background-color: white;
  width: 400px;
  height: 65px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 10px;
  elevation: 2;
`

export const AmountBalanceText = styled.Text`
  font-size: 18px;
  color: #fbbc21;
  font-weight: bold;
`

export const HistoryWrapper = styled.ScrollView`
  width: 95%;
  background-color: #f1f1f1;
  margin: 50px 30px 10px 30px;
  border-radius: 10px;
  z-index: 10000;
`

export const CardWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;  
  margin: 20px 0px;
`

export const Card = styled.View<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  width: 70%;
  height: 65px;
  flex-direction: row;
  border-left-width: 5px;
  border-left-color: ${props => props.type === 'adding' ? 'green' : 'red'};
`
