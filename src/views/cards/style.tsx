import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const HeaderWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #fbbc21;
`
export const Card = styled.View`
  position: absolute;
  width: 320px;
  height: 180px;
  border-radius: 10px;
  background-color: #cecece;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  margin: 20px 0px 0px;
  elevation: 2;
`
export const ChipCard = styled.View`
  width: 45px;
  height: 30px;
  background-color: white;
  border-radius: 2px;
`
export const CardNumber = styled.Text`
  font-size: 22px;
  color: #333333;
  margin: 10px 0px 3px 0px;
`
export const CardNameValidadWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const CardValidad = styled.Text`
  font-size: 12px;
  color: #333333;
  font-weight: bold;
`
export const VirtualCardWraper = styled.View`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  background-color: #cecece;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  margin: 200px 0px 0px;
  elevation: 2;
`
export const VirtualCardNumber = styled.Text`
  font-size: 12px;
`
export const CreateVirtualCardWrapper = styled.View`
  width: 100%;
  margin: 150px;
`
