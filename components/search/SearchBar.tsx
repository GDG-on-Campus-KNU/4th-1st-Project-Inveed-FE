import { View, TextInput, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  return (
    <View className="flex-row items-center rounded-full px-3 py-2">
      <Pressable>
        <Ionicons name="chevron-back" size={20} />
      </Pressable>

      <View className="flex-row flex-1 items-center ml-2 bg-background p-2 rounded-xl">
        <Ionicons name="search" size={20} color="gray" className="mr-2" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="검색"
          placeholderTextColor={colors.LABEL}
          className="flex-1 text-base border-0 focus:border-0 outline-none"
        />
      </View>
    </View>
  );
};
