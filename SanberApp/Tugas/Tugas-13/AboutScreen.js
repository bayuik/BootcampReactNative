import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class AboutScreen extends React.Component{
    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.about}>Tentang Saya</Text>
                    <MaterialIcons name="account-circle" size={200} color="#efefef" style={styles.iconProfile} />
                    <Text style={styles.name}>Bayu Indra Kusuma</Text>
                    <Text style={styles.skill}>React Native Developer</Text>
                    <View style={styles.portofolio}>
                        <Text style={styles.textHeader}>Portofolio</Text>
                        <View style={styles.iconGit}>
                            <View style={styles.git}>
                                <MaterialCommunityIcons name="gitlab" size={42} color="#3ec6ff" />
                                <Text style={styles.gitText}>@bayuik</Text>
                            </View>
                            <View style={styles.git}>
                                <AntDesign name="github" size={42} color="#3ec6ff" />
                                <Text style={styles.gitText}>@bayuik</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contact}>
                        <Text style={styles.textHeader}>Hubungi Saya</Text>
                        <View style={styles.socmed}>
                            <View style={styles.socmedList}>
                                <AntDesign name="facebook-square" size={39} color="#3EC6FF" />
                                <Text style={styles.textSocmed}>BAYU IK</Text>
                            </View>
                            <View style={styles.socmedList}>
                                <AntDesign name="instagram" size={39} color="#3EC6FF" />
                                <Text style={styles.textSocmed}>@bayuik</Text>
                            </View>
                            <View style={styles.socmedList}>
                                <AntDesign name="twitter" size={39} color="#3EC6FF" />
                                <Text style={styles.textSocmed}>@bayuik</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 64,
        marginBottom: 64,
    },scrollView: {
        marginHorizontal: 0,
    },
    about: {
        color: '#003366',
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    iconProfile: {
        marginTop: 12,
    },
    name: {
        color: '#003366',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 24,
        fontFamily: 'Roboto',
    },
    skill: {
        fontFamily: 'Roboto',
        marginTop: 8,
        color: '#3ec6ff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    portofolio: {
        backgroundColor: '#efefef',
        borderRadius: 16,
        marginTop : 16,
        height: 140,
        width: '95%'
    },
    textHeader: {
        fontFamily: 'Roboto',
        color: '#003366',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#003366',
        width: '95%',
        alignSelf: 'center',
        paddingBottom: 8,
    },
    iconGit: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 19,
    },
    git: {
        alignItems: 'center'
    },
    gitText: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#003366',
    },
    contact: {
        backgroundColor: '#efefef',
        borderRadius: 16,
        marginTop: 9,
        height: 140,
        width: '95%',
        height: 251,
    },
    socmed: {
        alignItems: 'center',
        padding: 20,
    },
    socmedList: {
        alignContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 29
    },
    textSocmed: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10,
    }
})