import { Image, StyleSheet, Platform, View, Text } from "react-native";
import "./../../global.css";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TransferNotification } from "@/components/transfer/TransferNotification";
import { SearchBar } from "@/components/search/SearchBar";
import { TransferNotificationPage } from "@/pages/transfer/TransferNotificatonPage";
import { ExpenseDetailPage } from "@/pages/expense/ExpenseDetailPage";
import { TransferCheckPage } from "@/pages/transfer/TransferCheckPage";
import Loginbutton from "@/components/button/LoginButton";
export default function HomeScreen() {
  return (
    <View>
      <Text>테스트용 텍스트</Text>
      <Loginbutton />
    </View>
  );
}
