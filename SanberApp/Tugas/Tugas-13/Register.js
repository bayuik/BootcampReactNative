import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class RegisterScreen extends React.Component {
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('./images/logo.png')} />
                    <Text style={styles.textLogin}>Login</Text>
                    <View>
                        <Text style={styles.labelInput}>Username</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Email</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Password</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Ulangi Password</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.daftar}>
                        <Text style={styles.text}>Daftar ?</Text>
                    </TouchableOpacity>
                    <Text style={styles.atau}>atau</Text>
                    <TouchableOpacity style={styles.login}>
                        <Text style={styles.text}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 64,
        marginTop: 63,
    },
    containerInput: {
        justifyContent: 'flex-start',
    },
    logo : {
        width: 375,
        height: 102,
    },
    textLogin: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#003366',
        marginTop: 56,
        paddingBottom: 40,
    },
    labelInput: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#003366',
        paddingTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#003366',
        paddingTop: 4,
        width: 294,
        height: 48,
    },
    login: {
        height: 40,
        marginTop: 32,
        backgroundColor: '#3ec6ff',
        borderRadius: 16,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontStyle: 'normal',
    },
    atau: {
        paddingTop: 16,
        color: '#3ec6ff',
        fontSize: 24,
        fontFamily: 'Roboto',
    },
    daftar: {
        height: 40,
        marginTop: 32,
        backgroundColor: '#003366',
        borderRadius: 16,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
    }
})