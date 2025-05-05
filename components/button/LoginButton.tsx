import { Pressable, Text } from "react-native";
import type { FC } from "react";
import { SvgProps } from "react-native-svg";

type Props = {
  content: string;
  icon: FC<SvgProps>;
  onPress: () => void;
};

const Loginbutton = ({ content, icon: Icon, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-4/5 flex flex-row justify-center items-center w-full py-4 rounded-lg bg-white border border-gray-200"
    >
      {Icon && <Icon width={20} height={20} />}
      <Text className="ml-2 text-sm text-left">{content}</Text>
    </Pressable>
  );
};

export default Loginbutton;
