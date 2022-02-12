import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { Text, Post } from '../../Components'


const Home = () => (
    <View style={{
        flex: 1
    }}>
        <FlatList
            style={{ flex: 1 }}
            data={[1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={({ item, index }) => {
                return <Post />
            }}
        />

    </View>
);

export default Home;
