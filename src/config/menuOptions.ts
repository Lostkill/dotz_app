import { faIdCard, faMoneyBillWave, faCashRegister, faBarcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as loginResource from '../@dotzApp/model/login/resources'

export default [
  {
    name: 'cards',
    label: 'CARTÕES',
    icon: faIdCard,
    action: () => console.log('cards')
  },
  {
    name: 'converter',
    label: 'CONVERSOR',
    icon: faMoneyBillWave,
    action: () => console.log('converter')
  },
  {
    name: 'extract',
    label: 'EXTRATO',
    icon: faCashRegister,
    action: (navigator) => navigator.navigate('extract')
  },
  {
    name: 'payment',
    label: 'PAGAMENTO',
    icon: faBarcode,
    action: (navigator) => navigator.navigate('payment')
  },
  {
    name: 'logout',
    label: 'SAIR',
    icon: faSignOutAlt,
    action: () => loginResource.signOut()
  }
]
