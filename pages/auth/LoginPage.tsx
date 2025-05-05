import { View, Text, StyleSheet } from "react-native";

import InveedLogo from "@/assets/images/InveedLogo.svg";
import TextLogo from "@/assets/images/TextLogo.svg";
import GoogleLogo from "@/assets/images/google-logo.svg";

import Loginbutton from "@/components/button/LoginButton";

import { useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/token");
  };

  return (
    <View style={styles.container}>
      <InveedLogo />
      <TextLogo />
      <Loginbutton
        content="Google로 시작하기"
        icon={GoogleLogo}
        onPress={handleLogin}
      />
      <View>
        <Text className="text-base text-center text-label">
          로그인하여 Inveed와 함께
        </Text>
        <Text className="text-base text-center text-label">
          스마트한 주식 투자를 시작하세요!
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    gap: 32,
  },
});
