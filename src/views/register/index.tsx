import React from 'react'
import { Image, Text } from 'react-native'

import { TextField } from '../../components/textField'
import { ButtonRounded } from '../../components/buttons/rounded'

import * as Styled from './style'
import { IRegisterViewProps } from './types'

const RegisterView: React.FC<IRegisterViewProps> = (props) => {
  return (
    <Styled.Wrapper>
      <Image style={{ width: 120, height: 80 }} source={require('../../@dotzApp/assets/image/dots-logo.png')}/>
      <Text>Criar Conta Dotz</Text>
      <Styled.FormWrapper>
        <TextField
          handleChange={text => props.handleChange('name', text)}
          placeholder="Nome"
          outlined='#fbbc21'
          rounded='10px'
          width={'60%'}
          height={'35px'}
        />
        <TextField
          handleChange={text => props.handleChange('email', text)}
          placeholder="Email"
          outlined='#fbbc21'
          rounded='10px'
          width={'60%'}
          height={'35px'}
        />
        <TextField
          handleChange={text => props.handleChange('password', text)}
          placeholder="Password"
          outlined='#fbbc21'
          rounded='10px'
          width={'60%'}
          height={'35px'}
          secureTextEntry
        />

        <ButtonRounded
          label='CRIAR CONTA'
          handleOnPress={() => props.handleSubmit()}
          backgroundColor='#fbbc21'
          fontSize={'14px'}
          fontWeight={'bold'}
          borderRadius='30px'
          border='1px solid #fbbc21'
          color='white'
          width={'62%'}
          margin={'10px 0px 0px 0px'}
        />
      </Styled.FormWrapper>
    </Styled.Wrapper>
  )
}

export { RegisterView }
