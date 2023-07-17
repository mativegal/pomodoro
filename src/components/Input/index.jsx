import { StyleSheet, TextInput, View } from 'react-native'

export default Input = ({ option, setCustomMinutes, setTime }) => {
  const handleChange = (minutes) => {
    setCustomMinutes(minutes)
    setTime(minutes * 60)
  }
  return (
    <>
      {option === 'Custom' && (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Insert minutes'
            placeholderTextColor='black'
            keyboardType='numeric'
            onChangeText={(minutes) => handleChange(minutes)}
            autoFocus={true}
            maxLength={2}
          />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: '#FBD9D9',
    height: 40,
    marginTop: 20,
  },
  input: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 22,
  },
})
