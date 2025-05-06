import { Image, Pressable, Text, View } from 'react-native';

type SearchKeywordProps = {
  img_url: string;
  label: string;
};

export const SearchKeyword = ({ img_url, label }: SearchKeywordProps) => {
  return (
    <Pressable>
      <View className="flex flex-row gap-2 bg-white p-2 rounded-xl shadow-md">
        <Image
          source={{ uri: img_url }}
          className="w-5 h-5 rounded-full"
        ></Image>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
};
