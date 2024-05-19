import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const AccountInfoDialog = ({ setShowAccountInfo }) => {
    const fullName = FIREBASE_AUTH.currentUser?.displayName;
    const email = FIREBASE_AUTH.currentUser?.email;

  return (
    <View style={styles.container}>
      <View style={styles.dialogBox}>
        <TouchableOpacity onPress={() => setShowAccountInfo(false)}>
          <XMarkIcon size={hp(10)} color={"blue"} />
        </TouchableOpacity>

        <Text style={styles.title}>Account Information</Text>
        <Text style={styles.info}>Name: {fullName}</Text>
        <Text style={styles.info}>Email: {email}</Text>

        <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Position the dialog box absolutely
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    backgroundColor: "rgba(50,50,50,0.5)", // semi-transparent background
  },
  dialogBox: {
    width: "80%", // 80% of the parent container's width
    padding: 20, // Add some padding
    backgroundColor: "#F59E0B", // bg-amber-500
    borderRadius: 10, // Rounded corners
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  info: {
    fontSize: 16,
    color: "#fff",
  },
});

export default AccountInfoDialog;
