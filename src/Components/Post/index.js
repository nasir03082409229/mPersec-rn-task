import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '../../Components'


const Post = () => (
    <View style={{ backgroundColor: '#fff', marginVertical: 5, padding: 15 }}>
        <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: `https://www.w3schools.com/howto/img_avatar.png` }}
                style={{ width: 50, height: 50, borderRadius: 100 }} />
            <View style={{
                flex: 1, justifyContent: 'center',
                paddingHorizontal: 10
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Muhammad Nasir</Text>
                    <View style={{
                        width: 5, height: 5,
                        backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 8
                    }} />
                    <Text>2nd </Text>
                </View>
                <Text>React Native Developer</Text>
            </View>
        </View>
        <View style={{ paddingVertical: 5 }}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        </View>
    </View>
);

export default Post;
