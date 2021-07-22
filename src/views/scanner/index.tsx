import React, { useState, useEffect } from 'react'
import { Text, Modal, ActivityIndicator } from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner'
import { ButtonRounded } from '../../components/buttons/rounded'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarcode, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import * as Styled from './style'
import { IScannerView } from './types'

const ScannerView: React.FC<IScannerView> = (props) => {
  const [hasPermission, setHasPermission] = useState<string | boolean | null>(null)
  const [scanned, setScanned] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [barCodeData, setBarCodeData] = useState<{ type: string, data: string, price: number }>({
    type: '',
    data: '',
    price: 0
  })

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return (
      <Styled.getPermissionWrapper>
        <ActivityIndicator size={112} color="#00ff00" />
      </Styled.getPermissionWrapper>
    )
  }

  if (hasPermission === false) {
    return (
      <Styled.getPermissionWrapper>
        <FontAwesomeIcon icon={faExclamationTriangle} size={128}/>
        <Text>Oops, é necessario permissão para acessar a camera :D</Text>
      </Styled.getPermissionWrapper>
    )
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)

    const randomPrice = Math.floor(Math.random() * 1000) + 50
    const price = Math.round(randomPrice * 100) / 100
    setBarCodeData({ type, data, price: price })

    setModalVisible(true)
  }

  return (
    <Styled.Wrapper>
      <Styled.TitleScanner>Posicionar código de barra no centro</Styled.TitleScanner>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ width: '100%', height: '90%' }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setScanned(false)
          setModalVisible(!modalVisible)
        }}
      >
        <Styled.ModalWrapper>
          <FontAwesomeIcon icon={faBarcode} size={112}/>
          <Text>{barCodeData.data}</Text>
          <Text>Saldo Atual: Dz {props.dotzBalance} | R$ {props.moneyBalance}</Text>
          <Text>Preço: R$ {barCodeData.price}</Text>
          <ButtonRounded
            label='PAGAR NO DINHEIRO'
            handleOnPress={() => {
              props.handlePayment('moneyBalance', barCodeData.price)
              setScanned(false)
              setModalVisible(!modalVisible)
            }}
            backgroundColor='#fbbc21'
            fontSize={'14px'}
            fontWeight={'bold'}
            borderRadius='30px'
            border='1px solid #fbbc21'
            color='white'
            width={'62%'}
            margin={'10px 0px 0px 0px'}
          />
          <ButtonRounded
            label='PAGAR COM DOTZ'
            handleOnPress={() => {
              props.handlePayment('dotzBalance', barCodeData.price)
              setScanned(false)
              setModalVisible(!modalVisible)
            }}
            backgroundColor='#fbbc21'
            fontSize={'14px'}
            fontWeight={'bold'}
            borderRadius='30px'
            border='1px solid #fbbc21'
            color='white'
            width={'62%'}
            margin={'10px 0px 0px 0px'}
          />
        </Styled.ModalWrapper>
      </Modal>
    </Styled.Wrapper>
  )
}

export { ScannerView }
