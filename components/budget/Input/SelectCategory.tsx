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
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = 80;

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
        className="flex flex-row justify-between items-center w-full px-4 py-5 border-b border-label"
      >
        <Text className="w-1/5 text-start font-semibold text-title">
          카테고리
        </Text>
        <Text className="flex-grow text-start text-label">
          {selected || "카테고리 선택하기"}
        </Text>
        <FontAwesome name="chevron-right" size={16} color="gray" />
      </Pressable>

      <Modal transparent visible={modalVisible} animationType="none">
        <Pressable
          className="flex-1 bg-black bg-opacity-30"
          onPress={closeModal}
        />
        <Animated.View
          style={{
            transform: [{ translateY: slideAnimation }],
            paddingBottom: insets.bottom + TAB_BAR_HEIGHT,
          }}
          className="absolute bottom-0 w-full bg-white rounded-t-2xl pt-4 pb-15"
        >
          <View className="flex-row flex-wrap">
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
                  className="w-1/4 p-2"
                >
                  <View className="items-center p-4">
                    <FontAwesome5 name={iconName} size={16} color={color} />
                    <Text className="text-center text-black mt-1">{title}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default SelectCategory;
