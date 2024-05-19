import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Loading from "../components/loading";
import { updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const auth = FIREBASE_AUTH;

  const signUp = async () => {

    // check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('All fields are required');
      return;
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      window.alert('Passwords do not match');
      setConfirmPassword('');
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        await updateProfile(FIREBASE_AUTH.currentUser, {
          displayName: username,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
      style={styles.input}
      placeholder="Confirm Password"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry
    />

      {loading ? (
        <Loading size="large" className="mt-20" />
      ) : (
        <>
          <Button title="Sign Up" onPress={signUp} />
          {/* <Button title="Sign Up" onPress={signUp} /> */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
    height: 50,
    padding: 10,
    backgroundColor: "#fff",
  },
  loginText: {
    textAlign: "center",
    color: "blue",
    marginTop: 15,
  },
});

export default SignUp;
