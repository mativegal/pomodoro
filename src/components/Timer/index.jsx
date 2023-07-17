import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Utils
import { timeFormatter } from '../../utils/time'

export default Timer = ({
  time,
  setTime,
  start,
  setStart,
  currentTime,
  customMinutes,
}) => {
  useEffect(() => {
    let interval = null
    if (start) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    if (time === 0) {
      setStart(false)
      setTime(
        currentTime === 0
          ? 45 * 60
          : currentTime === 1
          ? 5 * 60
          : currentTime === 2
          ? 15 * 60
          : customMinutes * 60
      )
    }

    return () => clearInterval(interval)
  }, [start, time])

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{timeFormatter(time)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBE9E9',
    padding: 15,
    borderRadius: 15,
    marginTop: 40,
    width: 350,
    height: 350,
  },
  time: {
    textAlign: 'center',
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
  },
})
