import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'

// Utils
import { backgourndColors } from './src/utils/theme'
import { timeFuntionality } from './src/utils/time'

// Components
import Header from './src/components/Header'
import Input from './src/components/Input'
import Timer from './src/components/Timer'
import Restart from './src/components/Restart'
import Start from './src/components/Start'

export default function App() {
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState(timeFuntionality)
  const [start, setStart] = useState(false)
  const [option, setOption] = useState('Work')
  const [customMinutes, setCustomMinutes] = useState(0)

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: backgourndColors[currentTime] },
      ]}
    >
      <View style={styles.containerAndroid}>
        <StatusBar style='auto' />
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
          setOption={setOption}
          customMinutes={customMinutes}
        />
        <Input
          option={option}
          setCustomMinutes={setCustomMinutes}
          setTime={setTime}
        />
        <Timer
          time={time}
          setTime={setTime}
          currentTime={currentTime}
          start={start}
          setStart={setStart}
          customMinutes={customMinutes}
        />
        <View style={styles.btnContainer}>
          <Restart
            setTime={setTime}
            currentTime={currentTime}
            setStart={setStart}
            customMinutes={customMinutes}
          />
          <Start start={start} setStart={setStart} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerAndroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' && 60,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  btnContainer: {
    gap: 20,
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'center',
  },
})
