import React from 'react'

import { ButtonRounded } from '../../components/buttons/rounded'
import { Text } from 'react-native'

import menuOptions from '../../config/menuOptions'

import * as Styled from './style'
import { IHomeView } from './types'

const HomeView: React.FC<IHomeView> = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.UserInfoWrapper>
        <Styled.UserProfilerWrapper>
          <Styled.UserPhoto source={require('../../@dotzApp/assets/image/user.png')} />
          <Text>{props.username}</Text>
        </Styled.UserProfilerWrapper>
        <Styled.UserBalanceWrapper>
          <Styled.BalanceText>Dz: {props.dotzBalance}</Styled.BalanceText>
          <Styled.Hr />
          <Styled.BalanceText>R$ {props.money}</Styled.BalanceText>
        </Styled.UserBalanceWrapper>
      </Styled.UserInfoWrapper>
      <Styled.MenuOptions>
        {
          menuOptions.map(option => (
            <ButtonRounded
              key={option.name}
              label={option.label}
              handleOnPress={() => option.action(props.navigator)}
              backgroundColor='#ffffff'
              fontSize={'14px'}
              fontWeight={'bold'}
              borderRadius='5px'
              color='#d44702'
              width={'62%'}
              margin={'10px 0px 0px 0px'}
              icon={option.icon}
              iconSize={22}
            />
          ))
        }
      </Styled.MenuOptions>
      <Styled.Footer>Dotz conta digital 🚀</Styled.Footer>
    </Styled.Wrapper>
  )
}

export { HomeView }
