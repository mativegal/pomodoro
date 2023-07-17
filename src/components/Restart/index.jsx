import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default Restart = ({
  setTime,
  currentTime,
  setStart,
  customMinutes,
}) => {
  const handleRestart = () => {
    setTime(
      currentTime === 0
        ? 45 * 60
        : currentTime === 1
        ? 5 * 60
        : currentTime === 2
        ? 15 * 60
        : customMinutes * 60
    )
    setStart(false)
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={() => handleRestart()}>
      <Text style={styles.btnText}>Restart</Text>
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
