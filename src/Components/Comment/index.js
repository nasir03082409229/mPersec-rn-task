import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '..';

const Comment = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{}}>
            <Image source={{ uri: `https://www.w3schools.com/howto/img_avatar.png` }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100
                }} />
        </View>
        <View style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginVertical: 5, marginHorizontal: 5, borderRadius: 6,
            backgroundColor: '#f0ebfc',
            flex: 1
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Muhammad Nasir</Text>
            </View>
            <Text style={{ fontSize: 12 }}>DevOps Developer</Text>
            <Text style={{ fontSize: 14, }}>As discussed, Please check the following task and make sure it’s done by tomorrow. We will review it by tomorrow night</Text>
        </View>
    </View>
);

export default Comment;
