import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Post } from '../../Components';
import AppMiddleware from '../../Store/Middleware/AppMiddleware';

const Home = ({ getUsers, getPosts, users, posts }) => {
    const navigation = useNavigation()

    useEffect(() => {
        getUsers()
        getPosts()
    }, [])

    const onPressPost = (post) => navigation.navigate('PostDetail', { post })

    return (
        <View style={styles.container}>
            {(users && posts) ? <FlatList
                data={posts}
                renderItem={({ item }) => {
                    const user = users.find(x => x.id === item.userId)
                    return <Post key={item.id} post={item} user={user} onPress={() => onPressPost(item)} />
                }}
            /> : <View style={styles.loaderContainer}>
                <ActivityIndicator size={'large'} />
            </View>}

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
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
