import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Image, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Text, Post } from '../../Components'
import AppMiddleware from '../../Store/Middleware/AppMiddleware';

const Home = ({ getUsers, getPosts, users, posts }) => {
    const navigation = useNavigation()

    useEffect(() => {
        getUsers()
        getPosts()
    }, [])

    const onPressPost = (post) => {
        navigation.navigate('PostDetail', { post })
    }

    return (
        <View style={{ flex: 1 }}>
            {(users && posts) ? <FlatList
                style={{ flex: 1 }}
                data={posts}
                renderItem={({ item, index }) => {
                    const user = users.find(x => x.id === item.userId)
                    return <Post post={item} user={user} onPress={() => onPressPost(item)} />
                }}
            /> : <ActivityIndicator />}

        </View>
    );
}
const mapStateToProps = (state) => {

    return {
        users: state.users,
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (payload) => dispatch(AppMiddleware.getUsers(payload)),
        getPosts: (payload) => dispatch(AppMiddleware.getPosts(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
