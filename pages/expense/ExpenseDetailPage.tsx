import { ExpenseDetailItem } from '@/components/expense/ExpenseDetailItem';
import { TransferNotification } from '@/components/transfer/TransferNotification';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export const ExpenseDetailPage = () => {
  return (
    <SafeAreaView className="p-2 flex flex-col gap-4">
      <Pressable>
        <Ionicons name="chevron-back" color="gray" size={20} />
      </Pressable>
      <View>
        <Text className="text-title font-bold">지금까지 얼마나 썼을까요?</Text>
        <View className="flex flex-row">
          <Text className="text-xl font-bold">총 지출액 : </Text>
          <Text className="text-xl font-bold text-red">123600원</Text>
        </View>
      </View>
      <View className="flex flex-col gap-1.5">
        <ExpenseDetailItem
          date="2025년 3월 9일 17:37"
          img_url=""
          name="배달의 민족"
          detail="호식이 두마리 치킨"
          type="expense"
          price={-25000}
        ></ExpenseDetailItem>
        <ExpenseDetailItem
          date="2025년 3월 9일 17:37"
          img_url=""
          name="배달의 민족"
          detail="호식이 두마리 치킨"
          type="income"
          price={25000}
        ></ExpenseDetailItem>
      </View>
    </SafeAreaView>
  );
};
