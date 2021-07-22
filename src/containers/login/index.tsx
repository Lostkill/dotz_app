import React, { useState } from 'react'

import { LoginView } from '../../views/login'
import { ILoginContainerProps } from './types'

import * as loginResource from '../../@dotzApp/model/login/resources'

const LoginContainer: React.FC<ILoginContainerProps> = (props) => {
  const [userInfo, setUserInfo] = useState<{ email: string, password: string }>({
    email: '',
    password: ''
  })

  const handleChange = (name: string, text: string) => {
    setUserInfo({
      ...userInfo,
      [name]: text
    })
  }

  const handleSubmit = () => {
    loginResource.signIn(userInfo.email, userInfo.password)
  }

  return (
    <LoginView
      handleChange={handleChange}
      handleSubmit={() => handleSubmit()}
      navigator={props.navigation}
    />
  )
}

export { LoginContainer }
