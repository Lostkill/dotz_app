import React from 'react'
import { Text } from 'react-native'

import * as Styled from './style'
import { IExtractView } from './types'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const ExtractView: React.FC<IExtractView> = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper>
        <Styled.AmountBalanceWrapper>
          <Text>Saldo atual:</Text>
          <Styled.AmountBalanceText>
            Dz {props.dotzPoints}
          </Styled.AmountBalanceText>
          <Text>|</Text>
          <Styled.AmountBalanceText>
            R$ {props.money}
          </Styled.AmountBalanceText>
        </Styled.AmountBalanceWrapper>
      </Styled.HeaderWrapper>
      <Styled.HistoryWrapper
        decelerationRate='fast'
        showsHorizontalScrollIndicator={false}
      >
        {history.map(transaction => (
          <Styled.CardWrapper>
            <Styled.Card key={transaction.id} type={transaction.type}>
              {
                transaction.type === 'adding'
                  ? <FontAwesomeIcon icon={faArrowAltCircleUp} color="green" size={25}/>
                  : <FontAwesomeIcon icon={faArrowAltCircleDown} color="red" size={25}/>
              }
              <Text>R$ { transaction.value }</Text>
              <Text>
                { transaction.coinType === 'money' ? 'Dinheiro' : 'Dotz Points'}
              </Text>
            </Styled.Card>
          </Styled.CardWrapper>
        ))}
      </Styled.HistoryWrapper>
    </Styled.Wrapper>
  )
}

export { ExtractView }
