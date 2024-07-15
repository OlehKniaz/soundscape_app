import React from 'react';
import {FlatList} from 'react-native';
import {FC} from 'react';
import {SearchItem} from '../searchItem';

interface SearchListProps {
  searchItems: SearchItem[];
}

export const SearchList: FC<SearchListProps> = ({searchItems}) => (
  <FlatList
    bounces={true}
    data={searchItems}
    keyExtractor={(item, index) => `${item.id}-${index}`}
    renderItem={({item}) => <SearchItem item={item} />}
    showsVerticalScrollIndicator={false}
    onEndReachedThreshold={1}
  />
);
