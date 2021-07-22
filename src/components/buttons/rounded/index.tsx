import React from 'react'
import { IButtonProps } from './types'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import * as Styled from './style'

const ButtonRounded: React.FC<IButtonProps> = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Button
        backgroundColor={props.backgroundColor}
        borderRadius={props.borderRadius}
        border={props.border}
        width={props.width}
        margin={props.margin}
        onPress={() => props.handleOnPress()}
      >
        {props.icon && (
          <Styled.ButtonIcon>
            <FontAwesomeIcon icon={props.icon} size={props.iconSize}/>
          </Styled.ButtonIcon>
        )}
        <Styled.ButtonText
          fontSize={props.fontSize}
          color={props.color}
          fontWeight={props.fontWeight}
        >
          {props.label}
        </Styled.ButtonText>
      </Styled.Button>
    </Styled.Wrapper>
  )
}

export { ButtonRounded }
