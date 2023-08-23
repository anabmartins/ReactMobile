import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    backgroundColor: '#A1C2E3',
  },
  logo: {
    width: 134,
    height: 134,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 17,
  },
  title: {
    color: '#173BA6',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Inter-Black',
  },
  subtitle: {
    color: '#737373',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 80,
    fontFamily: 'Inter-Black',
  },
  cadastro: {
    fontSize: 15,
    marginBottom: 10,
    color: '#FA321A',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
})

export default styles;