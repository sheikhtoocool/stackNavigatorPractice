import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingVertical: 50,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  label: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
    marginLeft: 15,
  },
  data: {
    flex: 3,
    fontWeight: 'normal',
    fontSize: 30,
    lineHeight: 30,
    marginLeft: 15,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginTop: 30,
  },
  btnText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
