import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // 네비게이션 컨테이너
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack 네비게이션
import Color from "../../assets/colors/Color";

export default function GoMembership({ navigation }) {
  return (
    <View style={styles.membership_warp}>
      <Text style={styles.membership_text}>새로운 계정이 필요하신가요?</Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("MembershipStart")}
      >
        <Text style={styles.membership_go}>회원가입</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  membership_warp: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  membership_text: {
    fontFamily: "Pretendard-Medium",
    fontSize: 14,
  },
  membership_go: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 14,
    color: Color.darkPurple,
    textDecorationLine: "underline",
  },
});
