import { useState } from 'react';
import { RealTimeSearchKeyword } from '@/components/search/RealTimeSearchKeyword';
import { SearchBadge } from '@/components/search/SearchBadge';
import { SearchBar } from '@/components/search/SearchBar';
import { SearchKeyword } from '@/components/search/SearchKeyword';
import { SafeAreaView, Text, View } from 'react-native';

export const SearchPage = () => {
  const [searchValue, setSearchValue] = useState(''); // 🔥 검색어 상태 추가

  return (
    <SafeAreaView className="flex flex-col">
      <SearchBar value={searchValue} onChangeText={setSearchValue} />
      {searchValue === '' ? (
        <View className="flex flex-col gap-2">
          <View className="flex flex-row gap-1">
            <SearchBadge label="닌텐도" />
            <SearchBadge label="닌텐도" />
            <SearchBadge label="닌텐도" />
          </View>
          <View className="flex flex-col gap-2 p-4 rounded-xl shadow-md">
            <View className="flex flex-row justify-between">
              <Text className="text-label text-xs">실시간 인기 검색 주식</Text>
              <Text className="text-label text-xs">오늘 14:04 기준</Text>
            </View>
            <View className="flex flex-col gap-1.5">
              <RealTimeSearchKeyword
                index={1}
                label="대진 첨단 소재"
                current={81.1}
              />
              <RealTimeSearchKeyword
                index={2}
                label="삼성전자"
                current={95.4}
              />
              <RealTimeSearchKeyword index={3} label="LG화학" current={120.0} />
            </View>
          </View>
        </View>
      ) : (
        <View className="flex flex-col gap-2">
          <SearchKeyword img_url="" label="테슬라" />
          <SearchKeyword img_url="" label="삼성전자" />
          <SearchKeyword img_url="" label="현대차" />
          <SearchKeyword img_url="" label="카카오" />
        </View>
      )}
    </SafeAreaView>
  );
};
