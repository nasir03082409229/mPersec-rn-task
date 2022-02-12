import React from 'react';
import { Image, View } from 'react-native';
import { Post, Text } from '../../Components'


const PostDetail = () => (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
        <Post />
        <View style={{ backgroundColor: '#fff', paddingHorizontal: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Comments</Text>
        </View>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Image source={{ uri: `https://www.w3schools.com/howto/img_avatar.png` }}
                        style={{ width: 50, height: 50, borderRadius: 100 }} />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Muhammad Nasir</Text>
                    </View>
                    <Text>React Native Developer</Text>
                </View>
            </View>

        </View>

    </View>
);

export default PostDetail;
