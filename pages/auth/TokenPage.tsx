import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import HanGukLogo from "@/assets/images/hangukLogo.svg";
import TextLogo from "@/assets/images/TextLogo.svg";

import { useRouter } from "expo-router";
import { useAuthStore } from "@/stores/useAuthStore";

import Loginbutton from "@/components/button/LoginButton";
import ColoredButton from "@/components/button/ColoredButton";
import Input from "@/components/input/Input";

export default function TokenPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleComplete = () => {
    login();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <TextLogo />
      <View>
        <Text className="text-base text-center text-label">
          한국투자증권에서 발급받은
        </Text>
        <Text className="text-base text-center text-label">
          AppKey와 SecretKey를 입력해주세요.
        </Text>
      </View>
      <Loginbutton
        content="한국투자증권 페이지 바로가기"
        icon={HanGukLogo}
        onPress={() => {}}
      />
      <Input title="AppKey" placeholder="AppKey를 입력해 주세요. " />
      <Input title="SecretKey" placeholder="SecretKey를 입력해 주세요. " />
      <ColoredButton color="green" text="입력 완료" onPress={handleComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    gap: 32,
  },
});
