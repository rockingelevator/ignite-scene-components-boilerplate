import { StackNavigator } from 'react-navigation'
import { LaunchScene } from '../Scenes'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScene: { screen: LaunchScene }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScene',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
