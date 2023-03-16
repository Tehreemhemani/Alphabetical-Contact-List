import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import SectionListContacts from 'react-native-sectionlist-contacts'
import Header from '../Components/Header';

export default class Example extends React.Component {



  constructor(props) {
    super(props)

    let nameData = [
      { "name": "Abbey Longton            +7345847381" },
      { "name": "Abbot James                +8496236619" },
      { "name": "Adele Parker                +9772898260" },
      { "name": "Ananya Zahid              +2796965869" },
      { "name": "Ben davias                 +7345847381" },
      { "name": "Bob dillian                +8496236619" },
      { "name": "Brittany                     +9772898260" },
      { "name": "ciara Longton            +7345847381" },
      { "name": "cabott James                +8496236619" },
      { "name": "diana Parker                +9772898260" },
      { "name": "desiaya Zahid              +2796965869" },
      { "name": "emmy davias                 +7345847381" },
      { "name": "eagle dillian                +8496236619" },
      { "name": "frittany                     +9772898260" },
      { "name":  "firdie.                   +9772898260" },
      { "name":  "gob dillian                +2796965869" },
      { "name": "gabott James                +8496236619" },
      { "name": "hiana Parker                +9772898260" },
      { "name": "hesiaya Zahid              +2796965869" },
      { "name": "immy davias                 +7345847381" },
      { "name": "iagle dillian                +8496236619" },
      { "name": "jrittany                     +9772898260" },
      { "name":  "jirdie.                   +9772898260" },
      { "name":  "kob dillian                +2796965869" },
      { "name":  "liana                   +9772898260" },
      { "name":  "lanny                    +2796965869" },
      { "name":  "moose                    +2796965869" },
      { "name":  "Nanny                    +2796965869" },
      { "name":  "Octavia                    +2796965869" },
      { "name":  "panny                    +2796965869" },
      { "name":  "Quantico                    +2796965869" },
      { "name":  "Rakesh                    +2796965869" },
      { "name":  "Sam                    +2796965869" },
      { "name":  "Tarekh                    +2796965869" },
      { "name":  "Umar                    +2796965869" },
      { "name":  "Vemon                   +2796965869" },
      { "name":  "Waqas                    +2796965869" },
      { "name":  "Xlander                    +2796965869" },
      { "name":  "Younus                   +2796965869" },
      { "name":  "Zamin                    +2796965869" },
    ]

    this.state = {
      dataArray: nameData,
    }
  }

  _renderHeader = (params) => {
    return (
      <View>
        <Text style={styles.headerText}> {params.key}</Text>
      </View>


    );
  }

  renderHeader = (item, index, section) => {
    return (
      <view style={styles.itemView}>
        <view style={styles.itemTextView}>
          <Text style={styles.itemFirstName}>{item.firstname}</Text>
          <Text style={styles.itemlastName}>{item.lastname}</Text>
        </view>
      </view>
    );
  };


  render() {
    return (

      <View style={styles.container}>

        <View>
          <Header />
        </View>
        <SectionListContacts
          ref={s => this.sectionList = s}
          sectionListData={this.state.dataArray}
          // sectionHeight={150}
          initialNumToRender={this.state.dataArray.length}
          showsVerticalScrollIndicator={false}
          SectionListClickCallback={(item, index) => {
            console.log('---SectionListClickCallback--:', item, index)
          }}
          otherAlphabet="#"
          renderHeader={this._renderHeader}
          renderItem={this._renderItem}
          letterViewStyle={styles.letterView}
          letterTextStyle={styles.letterText}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },

  headerView: {
    height: 28,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "center "
  },
  headerText: {
    marginLeft: 16,
    fontFamily: 'Arial',
    fontSize: 17,
    color: '#ffffff'
  },
  itemView: {
    height: 44,
    backgroundColor: 'rgba 22,22,22,0,75',
  },

  itemTextView: {
    height: 44,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  itemFirstName: {
    fontFamily: 'Arial',
    fontSize: 17,
    color: '#ffffff',

  },

  itemlastName: {
    marginLeft: 5,
    fontFamily: 'Arial',
    fontSize: 17,
    color: '#ffffff',

  },
  letterText: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#007AFF',
  }





})