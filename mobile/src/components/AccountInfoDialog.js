import React from "react";
<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
=======
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
import { XMarkIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FIREBASE_AUTH } from "../FirebaseConfig";
<<<<<<< HEAD
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const AccountInfoDialog = ({ setShowAccountInfo }) => {
  const fullName = FIREBASE_AUTH.currentUser?.displayName;
  const email = FIREBASE_AUTH.currentUser?.email;
  const phoneNumber = FIREBASE_AUTH.currentUser?.phoneNumber;
  const emailVerified = FIREBASE_AUTH.currentUser?.emailVerified;
  const creationTime = FIREBASE_AUTH.currentUser?.metadata.creationTime;
  const lastSignInTime = FIREBASE_AUTH.currentUser?.metadata.lastSignInTime;
=======

const AccountInfoDialog = ({ setShowAccountInfo }) => {
    const fullName = FIREBASE_AUTH.currentUser?.displayName;
    const email = FIREBASE_AUTH.currentUser?.email;
>>>>>>> 3603275 (Added firebase authentication  basic functionality)

  return (
    <View style={styles.container}>
      <View style={styles.dialogBox}>
<<<<<<< HEAD
        {/* avatar pic */}
        <Image
          source={require("../../assets/images/avatar2.png")}
          style={[{ height: hp(5), width: hp(5.5) }, styles.avatar]}
        />

        {/* cross icon */}
        <TouchableOpacity
          style={styles.cross}
          onPress={() => setShowAccountInfo(false)}
        >
          <XMarkIcon size={hp(5)} color={"#273238"} />
        </TouchableOpacity>

        {/* account info */}
        <Text style={styles.info}>
          Name: <Text style={styles.details}>{fullName}</Text>
        </Text>
        <Text style={styles.info}>
          Email: <Text style={styles.details}>{email}</Text>
        </Text>
        <Text style={styles.info}>
          Phone: <Text style={styles.details}>{phoneNumber}</Text>
        </Text>
        <Text style={styles.info}>
          Email Verified:{" "}
          <Text style={styles.details}>{emailVerified ? "Yes" : "No"}</Text>
        </Text>
        <Text style={styles.info}>
          Member Since: <Text style={styles.details}>{creationTime}</Text>
        </Text>
        <Text style={styles.info}>
          Last Active On: <Text style={styles.details}>{lastSignInTime}</Text>
        </Text>

        {/* <Button
          style={styles.signout}
          title="Sign Out"
          onPress={() => FIREBASE_AUTH.signOut()}
        /> */}

        <TouchableOpacity
          style={styles.signout}
          onPress={() => FIREBASE_AUTH.signOut()}
        >
          <Text style={styles.signout_txt}>Sign Out</Text>
          <ArrowLeftIcon size={24} color="#fafafa" />
        </TouchableOpacity>
=======
        <TouchableOpacity onPress={() => setShowAccountInfo(false)}>
          <XMarkIcon size={hp(10)} color={"blue"} />
        </TouchableOpacity>

        <Text style={styles.title}>Account Information</Text>
        <Text style={styles.info}>Name: {fullName}</Text>
        <Text style={styles.info}>Email: {email}</Text>

        <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} />
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    position: "absolute",
=======
    position: "absolute", // Position the dialog box absolutely
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
<<<<<<< HEAD
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(50,50,50,0.5)",
  },
  dialogBox: {
    width: "80%",
    padding: 20,
    backgroundColor: "#89BD9E",
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    display: "flex",
    gap: 10,
=======
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
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
<<<<<<< HEAD
    color: "#273238",
  },
  info: {
    fontSize: hp(1.5),
    color: "#273238",
    fontWeight: "bold",
  },
  details: {
    fontSize: hp(1.5),
    color: "#273238",
    fontWeight: "normal",
  },
  cross: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  signout: {
    backgroundColor: "#D9534F",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  signout_txt: {
    color: "#fafafa",
    fontSize: hp(1.75),
=======
    color: "#fff",
  },
  info: {
    fontSize: 16,
    color: "#fff",
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
  },
});

export default AccountInfoDialog;
