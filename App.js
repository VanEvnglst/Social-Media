/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import LikeImage from './assets/images/like.png';

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
        </View>
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image
            source={{ uri: post.image }}
            style={styles.image}
            resizeMode='cover'
          />
        )}
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image
              source={LikeImage}
              style={styles.likeIcon}
            />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1
 },
 header: {
  flexDirection: 'row',
  padding: 10,
  alignItems: 'center',
  width: '100%'
 },
 post: {
  backgroundColor: '#fff',
  marginVertical: 5
 },
 profileImage: {
  width: 40,
  height: 40,
  borderRadius: 25,
  marginRight: 10,
 },
 name: {
  fontWeight: '500'
 },
 subtitle: {
  color: 'gray'
 },
 icon: {
  marginLeft: 'auto'
 },
 description: {
  lineHeight: 20,
  padding: 10
 },
 image: {
  width: '100%',
  aspectRatio: 1,
 },
 footer: {
  paddingHorizontal: 10,
 },
 statsRow: {
  flexDirection: 'row',
  borderBottomWidth: StyleSheet.hairlineWidth,
  paddingVertical: 10,
  borderColor: 'lightgray',
 },
 likeIcon: {
  width: 20,
  height: 20,
  marginRight: 5,
 },
 likedBy: {
  color: 'gray'
 },
 shares: {
  color: 'gray',
  marginLeft: 'auto'
 },
});

export default App;
