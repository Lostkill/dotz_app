import React, { useState } from 'react'

import * as registerResource from '../../@dotzApp/model/register/resources'

import { RegisterView } from '../../views/register'

const RegisterContainer: React.FC = () => {
  const [userInfo, setUserInfo] = useState<{ email: string, password: string, name: string }>({
    name: '',
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
    registerResource.create(userInfo.name, userInfo.email, userInfo.password)
  }

  return (
    <RegisterView
      handleSubmit={() => handleSubmit()}
      handleChange={handleChange}
    />
  )
}

export { RegisterContainer }
