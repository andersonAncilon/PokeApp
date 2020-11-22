import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

Enzyme.configure({ adapter: new Adapter() })
