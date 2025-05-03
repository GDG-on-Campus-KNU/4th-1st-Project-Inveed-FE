import { TransferNotification } from '@/components/transfer/TransferNotification';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export const TransferNotificationPage = () => {
  return (
    <SafeAreaView className="p-2 flex flex-col gap-4">
      <Pressable>
        <Ionicons name="chevron-back" color="gray" size={20} />
      </Pressable>
      <View>
        <Text className="text-title font-bold">투자 계좌로 이체해보세요</Text>
        <View className="flex flex-row">
          <Text className="text-xl font-bold">총 </Text>
          <Text className="text-xl font-bold text-pointgreen">123600원</Text>
          <Text className="text-xl font-bold"> 이체해야 해요</Text>
        </View>
      </View>
      <View className="flex flex-col gap-1.5">
        <TransferNotification></TransferNotification>
        <TransferNotification></TransferNotification>
        <TransferNotification></TransferNotification>
      </View>
    </SafeAreaView>
  );
};
