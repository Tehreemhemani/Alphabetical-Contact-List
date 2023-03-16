import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function Header() {
    return (

        <View>
            <View style={styles.header}>

                <View style={{ alignItems: "center", alignContent: "center", marginLeft: 15, marginTop: 10 }}>
                    <Icon
                        type="material-community"
                        name="arrow-left"
                        color={'black'}
                        size={30}
                    />
                </View>

                <View>
                    <Image
                        source={require('../Assets/logo.png')}
                        style={styles.logoImage}
                    />
                </View>

                <View style={{
                    alignItems: "center", alignContent: "center", marginTop: 10,
                    marginRight: 15
                }}>
                    <Icon
                        type="material-community"
                        name="medical-bag"
                        color={'black'}
                        size={30}
                    />
                </View>

            </View>

            <View style={styles.line}></View>

            {/* /////////////////////////////////////////  CONTACTS PART  ///////////////////////////////////// */}

            <View style={styles.container}>

                <View>
                    <Text style={{
                        color: 'black', fontSize: 12, fontWeight: "bold",
                        marginTop: 14
                    }}> 786 Contacts </Text>
                </View>

                <View>
                    <Text style={{
                        color: 'black', fontSize: 20, fontWeight: "bold",
                        marginTop: 7
                    }}> CONTACTS </Text>
                </View>

                <View style={{
                    alignItems: "center", alignContent: "center", marginTop: 10,
                    marginRight: 15
                }}>
                    <Icon
                        type="feather"
                        name="users"
                        color={'black'}
                        size={20}
                    />
                </View>

            </View>



            <View>
                <View style={styles.container}>

                    <View style={styles.circle}>
                    </View>

                    <View>
                        <Text style={{
                            color: 'black', fontSize: 20, fontWeight: "bold",
                            marginTop: 45, marginRight: 100
                        }}> John Smith </Text>
                    </View>

                    <View style={{
                        alignItems: "center", alignContent: "center", marginTop: 45,
                        marginRight: 15
                    }}>
                        <Icon
                            type="feather"
                            name="plus"
                            color={'black'}
                            size={25}
                        />
                    </View>
                </View>

                <View style={{ ...styles.line, marginTop: 20 }}></View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    logoImage: {
        width: 80,
        height: 20,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    },

    line: {
        borderColor: '#be9f56',
        borderWidth: 0.5,
        borderStyle: "solid",
        width: 335,
        height: 0.5,
        marginHorizontal: 10,
        marginTop: 8
    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 150,
        backgroundColor: '#be9f56',
        marginTop: 30
    },

    container: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
})
