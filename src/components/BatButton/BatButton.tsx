import React, { useState } from 'react';
import { View,Button,Text,Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordServices';
import * as Clipboard from 'expo-clipboard';


export function BatButton() {
    function handleGenerateButton(){
        let generateToken = generatePass
        setPass(generateToken)
    }
    function handleCopyButtoon(){
        Clipboard.setStringAsync(pass)
    }
    const [pass,setPass] = useState('')
    return (
    <>  
        <BatTextInput pass={pass} />
        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleCopyButtoon}>
            <Text style={styles.text}>☀ COPY</Text>
        </Pressable>
    </>
  );
}