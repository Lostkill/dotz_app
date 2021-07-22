import React from 'react'
import { Text } from 'react-native'
import { ICardView } from './types'

import { ButtonRounded } from '../../components/buttons/rounded'

import * as Styled from './style'

const CardsView: React.FC<ICardView> = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper />

      <Styled.Card>
        <Styled.ChipCard />
        <Styled.CardNumber>
          {
            props.card.number.replace(/[^\dA-Z]/g, '')
              .replace(/(.{4})/g, '$1 ').trim()
          }
        </Styled.CardNumber>
        <Styled.CardNameValidadWrapper>
          <Styled.CardValidad>
            {props.card.name}
          </Styled.CardValidad>
          <Styled.CardValidad>
            valid: {props.card.valid}
          </Styled.CardValidad>
        </Styled.CardNameValidadWrapper>
      </Styled.Card>

      {
        Object.keys(props.virtualCard).length > 0
          ? (
            <>
              <Styled.VirtualCardWraper>
                <Text>VirtualCard</Text>
                <Styled.ChipCard />
                <Styled.VirtualCardNumber>
                  {
                    props.virtualCard.number.replace(/[^\dA-Z]/g, '')
                      .replace(/(.{4})/g, '$1 ').trim()
                  }
                </Styled.VirtualCardNumber>
                <Styled.CardNameValidadWrapper>
                  <Styled.CardValidad>
                    {props.virtualCard.name}
                  </Styled.CardValidad>
                  <Styled.CardValidad>
                valid: {props.virtualCard.valid}
                  </Styled.CardValidad>
                </Styled.CardNameValidadWrapper>
              </Styled.VirtualCardWraper>

              <ButtonRounded
                label='EXCLUIR CARTÃO VIRTUAL'
                handleOnPress={() => props.handleDeleteVirtualCard()}
                backgroundColor='red'
                fontSize={'14px'}
                fontWeight={'bold'}
                borderRadius='30px'
                color='white'
                width={'62%'}
                margin={'20px 0px 0px 0px'}
              />
            </>
          )
          : (
            <Styled.CreateVirtualCardWrapper>
              <ButtonRounded
                label='CRIAR CARTÃO VIRTUAL'
                handleOnPress={() => props.handleAddVirtualCard()}
                backgroundColor='#fbbc21'
                fontSize={'14px'}
                fontWeight={'bold'}
                borderRadius='30px'
                border='1px solid #fbbc21'
                color='white'
                width={'62%'}
                margin={'10px 0px 0px 0px'}
              />
            </Styled.CreateVirtualCardWrapper>
          )}
    </Styled.Wrapper>
  )
}

export { CardsView }
