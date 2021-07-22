import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background-color: #f29433;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const UserInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0px;
`
export const UserProfilerWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const UserPhoto = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 100px;
`
export const UserBalanceWrapper = styled.View`
  flex: 0.7;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: #fbbc21;
`
export const BalanceText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`
export const Hr = styled.View`
  margin: 4px 0px;
  width: 25%;
  border-bottom-color: white;
  border-bottom-width: 1px;
`
export const MenuOptions = styled.View`
  width: 100%;
`
export const Footer = styled.Text`
  color: #ffffff;
  font-size: 10px;
  margin: 20px 0px 0px 0px;
`
