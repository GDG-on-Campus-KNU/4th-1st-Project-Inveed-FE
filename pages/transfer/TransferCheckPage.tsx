import { Button, SafeAreaView, Text, View } from 'react-native';
import Plant from '@/assets/plant.svg';
import ColoredButton from '@/components/button/ColoredButton';

export const TransferCheckPage = () => {
  return (
    <SafeAreaView className="flex-1 flex flex-col items-center justify-center gap-4">
      <Plant className="w-32 h-32"></Plant>
      <View className="flex flex-col items-center">
        <Text className="text-xl font-bold text-pointgreen">"10000"원</Text>
        <Text className="text-base">투자계좌에 입금해주세요</Text>
      </View>
      <Text className="text-label font-xs">
        입금하신 후 입금 완료 버튼을 눌러주세요
      </Text>
      <View className="flex flex-row gap-4">
        <ColoredButton text="입금 완료" size="sm"></ColoredButton>
        <ColoredButton text="입금 완료" size="sm" color="gray"></ColoredButton>
      </View>
    </SafeAreaView>
  );
};
