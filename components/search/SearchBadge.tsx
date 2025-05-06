import { Pressable, Text, View } from 'react-native';

type SearchBadgeProps = {
  label: string;
};

export const SearchBadge = ({ label }: SearchBadgeProps) => {
  return (
    <Pressable>
      <View className="flex flex-row gap-2 rounded-xl bg-white w-fit p-1.5 shadow-sm">
        <Text className="text-pointgreen text-xs">{label}</Text>
        <Pressable>
          <Text className="text-pointgreen text-xs">X</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
