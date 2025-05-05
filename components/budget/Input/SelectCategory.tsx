import {
  View,
  Text,
  Modal,
  Pressable,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { useRef, useState } from "react";
import "@/global.css";
import tw from "@/utils/tw";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { getCategoryIcon } from "@/components/budget/iconMapper";

const categories = [
  "food",
  "cafe",
  "entertainment",
  "life",
  "beauty",
  "fashion",
  "housing",
  "health",
  "others",
];
const screenHeight = Dimensions.get("window").height;

const SelectCategory = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(screenHeight)).current;

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnimation, {
      toValue: screenHeight,
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleSelect = (category: string) => {
    setSelected(category);
    closeModal();
  };

  return (
    <>
      <Pressable
        onPress={openModal}
        style={tw`flex flex-row justify-between items-center w-full px-4 py-5 border-b border-gray-300`}
      >
        <Text style={tw`w-1/5 text-start font-semibold text-gray-500`}>
          카테고리
        </Text>
        <Text style={tw`flex-grow text-start text-gray-400`}>
          {selected || "카테고리 선택하기"}
        </Text>
        <FontAwesome name="chevron-right" size={16} color="gray" />
      </Pressable>

      <Modal transparent visible={modalVisible} animationType="none">
        <Pressable
          style={tw`flex-1 bg-black bg-opacity-30`}
          onPress={closeModal}
        />
        <Animated.View
          style={[
            tw`absolute bottom-0 w-full bg-white rounded-t-2xl p-4`,
            {
              transform: [{ translateY: slideAnimation }],
            },
          ]}
        >
          <View style={tw`flex-row flex-wrap`}>
            {categories.map((category) => {
              const {
                name: iconName,
                color,
                title,
              } = getCategoryIcon(category);

              return (
                <Pressable
                  key={category}
                  onPress={() => handleSelect(title)}
                  style={tw`w-1/4 p-2`}
                >
                  <View style={tw`items-center p-4`}>
                    <FontAwesome5 name={iconName} size={16} color={color} />
                    <Text style={tw`text-center text-black mt-1`}>{title}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          <Pressable onPress={closeModal} style={tw`pt-4`}>
            <Text style={tw`text-center text-gray-500`}>취소</Text>
          </Pressable>
        </Animated.View>
      </Modal>
    </>
  );
};

export default SelectCategory;
