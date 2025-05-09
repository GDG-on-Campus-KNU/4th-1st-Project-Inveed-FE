import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

export const ExpensePatternAnalysisPage = () => {
  return (
    <SafeAreaView className="flex flex-col gap-2">
      <Pressable>
        <Ionicons name="chevron-back" color="gray" size={20} />
      </Pressable>
      <View>
        <Text className="text-title font-bold">
          지출 내역을 토대로 분석해보았어요
        </Text>
        <Text className="text-xl font-bold">나의 소비 패턴 분석</Text>
      </View>
      <View className="flex flex-col gap-2 shadow-md rounded-xl p-4">
        <View>
          <View className="flex flex-row">
            <Text className="text-xs font-bold text-title">저번 달보다 약</Text>
            <Text className="text-xs font-bold text-red">1250000원 </Text>
            <Text className="text-xs font-bold text-title">더 </Text>
            <Text className="text-xs font-bold text-red">지출</Text>
            <Text className="text-xs font-bold text-title">하였어요!</Text>
          </View>
          <View className="flex flex-row">
            <Text className="font-bold text-pointgreen">월별</Text>
            <Text className="font-bold">소비 금액 분석</Text>
          </View>
        </View>
        <TextInput
          multiline
          editable={false}
          className="text-title text-xs outline-none"
          value="저번 달과 식비 관련 지출 금액은 비슷하나 의류 카테고리에서 약 80000원
          더 지출 하셨네요~~~"
        ></TextInput>
      </View>

      <View className="flex flex-col gap-2 shadow-md rounded-xl p-4">
        <View>
          <View className="flex flex-row">
            <Text className="text-xs font-bold text-title">
              이번 달 가장 많이 소비한 카테고리는
            </Text>
            <Text className="text-xs font-bold text-red"> '음식'</Text>
            <Text className="text-xs font-bold text-title">이에요!</Text>
          </View>
          <View className="flex flex-row">
            <Text className="font-bold text-pointgreen">카테고리별</Text>
            <Text className="font-bold">소비 금액 분석</Text>
          </View>
        </View>
        <TextInput
          multiline
          editable={false}
          className="text-title text-xs outline-none"
          value="의류 235000원, 음식 320000원, 교통 8100원 이번달 음식 카테고리에서
          가장 많은 비율을 차지한 것은 배달이에요"
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};
