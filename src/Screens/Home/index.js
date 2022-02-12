import React, { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text, Post } from '../../Components'
import AppMiddleware from '../../Store/Middleware/AppMiddleware';

const Home = ({ getUsers, getPosts, users, posts }) => {
    useEffect(() => {
        getUsers()
        getPosts()
    }, [])

    // console.log(users)
    // console.log(posts)

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={posts}
                renderItem={({ item, index }) => {
                    const user = users.find(x => x.id === item.userId)
                    return <Post post={item} user={user} />
                }}
            />

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
