import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../../Themes'

// Styles
import s from './styles'

export default class LaunchScene extends Component {
  render () {
    return (
      <View style={s.mainContainer}>
        <Image source={Images.background} style={s.backgroundImage} resizeMode='stretch' />
        <ScrollView style={s.container}>
          <View style={s.centered}>
            <Image source={Images.launch} style={s.logo} />
          </View>

          <View style={s.section} >
            <Image source={Images.ready} />
            <Text style={s.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
