import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const AccountInfoDialog = ({ setShowAccountInfo }) => {
  const fullName = FIREBASE_AUTH.currentUser?.displayName;
  const email = FIREBASE_AUTH.currentUser?.email;
  const phoneNumber = FIREBASE_AUTH.currentUser?.phoneNumber;
  const emailVerified = FIREBASE_AUTH.currentUser?.emailVerified;
  const creationTime = FIREBASE_AUTH.currentUser?.metadata.creationTime;
  const lastSignInTime = FIREBASE_AUTH.currentUser?.metadata.lastSignInTime;

  return (
    <View style={styles.container}>
      <View style={styles.dialogBox}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  },
});

export default AccountInfoDialog;
