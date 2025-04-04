import { Pressable, StyleSheet, Text, View } from 'react-native';
import Check from '@/assets/check.svg';
import { colors } from '@/constants';

// export const TransferNotification = () => {
//   return (
//     <Pressable style={styles.container}>
//       <View>
//         <Text style={styles.dateText}>2025년 3월 9일 17:37</Text>
//         <Text style={styles.commentText}>설정하신 목표 n%에 달성했어요!</Text>
//         <Text style={styles.transferText}>눌러서 투자 계좌로 이체해보세요</Text>
//       </View>
//       <Check style={styles.check}></Check>
//     </Pressable>
//   );
// };

export const TransferNotification = () => {
  return (
    <Pressable className="bg-white rounded-xl p-4 w-full h-24">
      <View>
        <Text className="text-title">2025년 3월 9일 17:37</Text>
        <Text className="text-black">설정하신 목표 n%에 달성했어요!</Text>
        <Text className="text-label">눌러서 투자 계좌로 이체해보세요</Text>
      </View>
      <Check className="w-7 h-7"></Check>
    </Pressable>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.WHITE,
//     borderRadius: 12,
//     padding: 20,
//   },

//   dateText: {
//     color: colors.TITLE,
//   },

//   commentText: {
//     color: colors.BLACK,
//   },

//   transferText: {
//     color: colors.LABEL,
//   },

//   check: {
//     width: 24,
//     height: 24,
//   },
// });
