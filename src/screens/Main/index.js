import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {CollaboratorCard, Loading} from '~/components';
import {requestAllUsers, setSelectedUser} from '~/actions/userActions';

const Main = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {userList} = useSelector(state => state.user);
  const [offset, setOffset] = useState(10);
  const [loadMoreusers, setLoadMoreUsers] = useState(false);

  useEffect(() => {
    dispatch(requestAllUsers());
  }, []);

  const selectUser = user => {
    dispatch(setSelectedUser(user));
    navigate('SelectedUser');
  };

  const onEndReachedCallback = () => {
    if (offset < userList.length && loadMoreusers === false) {
      setLoadMoreUsers(true);
      setTimeout(() => {
        setLoadMoreUsers(false);
        setOffset(offset + 10);
      }, 500);
    }
  };

  return (
    <FlatList
      data={userList.slice(0, offset)}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-around', padding: 5}}
      renderItem={({item}) => (
        <CollaboratorCard
          collaborator={item}
          onPress={() => selectUser(item)}
        />
      )}
      keyExtractor={user => user.id.toString()}
      contentContainerStyle={{paddingBottom: 10}}
      onEndReached={onEndReachedCallback}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<Loading loading={loadMoreusers} />}
    />
  );
};

export default Main;
