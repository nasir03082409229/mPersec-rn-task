import React from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { Comment, Post, Text } from '../../Components'


const PostDetail = () => (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', }}>
        <Post />
        <View style={{ backgroundColor: '#fff', paddingHorizontal: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Comments</Text>
        </View>
        <FlatList
            style={{ flex: 1, paddingHorizontal: 15 }}
            data={[1, 2, 3, 4, 5, 1, 1, 1,]}
            renderItem={({ item, index }) => {
                return <Comment />
            }}
        />
    </ScrollView>
);

export default PostDetail;
