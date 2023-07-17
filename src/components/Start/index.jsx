import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Audio } from 'expo-av'

export default Start = ({ start, setStart }) => {
  const handleStart = () => {
    playSound()
    setStart(!start)
  }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/click.wav')
    )
    await sound.playAsync()
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={handleStart}>
      <Text style={styles.btnText}>{!start ? 'Start' : 'Stop'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 15,
    width: 150,
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
  },
})
