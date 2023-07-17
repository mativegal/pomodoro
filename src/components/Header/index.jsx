import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const options = ['Work', 'Short Break', 'Long Break', 'Custom']

export default Header = ({
  currentTime,
  setCurrentTime,
  setTime,
  setOption,
  customMinutes,
}) => {
  const handlePress = (index, item) => {
    const newTime =
      index === 0 ? 45 : index === 1 ? 5 : index === 2 ? 15 : customMinutes
    setCurrentTime(index)
    setTime(newTime * 60)
    setOption(item)
  }

  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: 'transparent' },
          ]}
          onPress={() => handlePress(index, item)}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 0,
  },
  itemStyle: {
    padding: 8,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'white',
  },
  itemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputContainer: {
    // width: 350,
  },
})
