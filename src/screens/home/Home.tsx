import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "../home/Style";
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';

export default function App() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
        <BatLogo />
        </View>
        <View style={styles.inputContainer}>
          <BatButton />
        </View>
        <StatusBar style="light" />
      </View>
    );
  }
  
  