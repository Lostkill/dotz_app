import database from '@react-native-firebase/database'

const createInitialDb = (userId: string, userName: string | null) => {
  database()
    .ref('/users/')
    .child(userId)
    .set({
      dotzBalance: 0,
      moneyBalance: 0
    }).then(() => console.log('balance created'))

  database()
    .ref('/cards/')
    .child(userId)
    .set({
      uid: userId,
      cards: [
        {
          name: userName,
          number: '1234 5678 9012 3456',
          cvv: '123',
          expirationDate: '05/2035',
          type: 'card'
        }
      ]
    }).then(() => console.log('cards created'))

  database()
    .ref('/extracts/')
    .child(userId)
    .set({
      uid: userId,
      history: []
    }).then(() => console.log('extract created'))
}

export { createInitialDb }
