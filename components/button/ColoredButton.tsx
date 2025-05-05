import { Pressable, Text } from 'react-native';
import '@/global.css';
import tw from '@/utils/tw';

type ColoredButtonProps = {
  color?: 'green' | 'blue' | 'gray';
  text: string;
  size?: 'sm' | 'md' | 'lg';
};

const ColoredButton = ({
  color = 'green',
  text,
  size = 'lg',
}: ColoredButtonProps) => {
  const bgColor =
    color === 'green'
      ? 'bg-green-500'
      : color === 'blue'
        ? 'bg-blue-500'
        : 'bg-gray-400';

  const width =
    size === 'lg'
      ? 'w-full'
      : size === 'md'
        ? 'w-1/2'
        : 'w-auto self-start py-1';

  return (
    <Pressable
      style={tw`flex flex-row justify-center items-center py-4 ${width} rounded-lg ${bgColor} border border-none`}
    >
      <Text style={tw`ml-3 mr-3 text-sm text-left text-white`}>{text}</Text>
    </Pressable>
  );
};

export default ColoredButton;
