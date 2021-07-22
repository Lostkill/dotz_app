import React, { useState } from 'react'
import { IConverterView } from './types'

import { Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { ButtonRounded } from '../../components/buttons/rounded'
import { TextField } from '../../components/textField'

import * as Styled from './style'

const ConverterView: React.FC<IConverterView> = (props) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Dotz Points', value: 'dotz' },
    { label: 'Dinheiro', value: 'dinheiro' }
  ])

  return (
    <Styled.Wrapper>
      <Styled.ConverterWrapper>
        <Text>Converter valor para:</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextField
          handleChange={text => props.setValueToConverte(parseFloat(text))}
          placeholder={value === 'dotz' ? 'escreva o valor em R$' : 'escreva o valor em Dotz Points'}
          outlined='#fbbc21'
          backgroundColor="white"
          rounded='10px'
          width={'100%'}
          height={'35px'}
          keyboardType="decimal-pad"
        />
        <ButtonRounded
          label='CONVERTER'
          handleOnPress={() => props.handleConverter(`${value}`, 230)}
          backgroundColor='white'
          fontSize={'14px'}
          fontWeight={'bold'}
          borderRadius='30px'
          color='#fbbc21'
          width={'100%'}
          margin={'25px 0px 0px 0px'}
        />
        <Styled.ResultWrapper>
          <Text>O valor de {props.valueToConverte} em {value || '(selecione um tipo de moeda)'} é:</Text>
          <Styled.ResultText>
            {props.converterResult}
          </Styled.ResultText>
        </Styled.ResultWrapper>
      </Styled.ConverterWrapper>
    </Styled.Wrapper>
  )
}

export { ConverterView }
