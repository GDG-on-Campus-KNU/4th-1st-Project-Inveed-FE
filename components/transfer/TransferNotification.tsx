import { Pressable, StyleSheet, Text, View } from 'react-native';
import Check from '@/assets/check.svg';

export const TransferNotification = () => {
  return (
    <Pressable className="bg-white rounded-xl p-4 w-full h-24 flex flex-row justify-between items-center shadow-md shadow-gray-300">
      <View className="flex flex-col gap-1">
        <Text className="text-title text-sm">2025년 3월 9일 17:37</Text>
        <View>
          <Text className="text-black">설정하신 목표 n%에 달성했어요!</Text>
          <Text className="text-label text-xs">
            눌러서 투자 계좌로 이체해보세요
          </Text>
        </View>
      </View>
      <Check className="w-5 h-5"></Check>
    </Pressable>
  );
};
