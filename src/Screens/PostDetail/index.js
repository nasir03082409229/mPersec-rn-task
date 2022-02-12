import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Comment, Post, Text } from '../../Components'
import AppMiddleware from '../../Store/Middleware/AppMiddleware';
import { Colors } from '../../Styles';


const PostDetail = ({ route, users, posts, getComments, comments }) => {

    const { post } = route.params;
    const postDetail = posts.find(x => x.id === post.id)
    const user = users.find(x => x.id === postDetail.userId)

    useEffect(() => {
        getComments()
    }, [])

    const commentsByPost = comments ? comments?.filter(x => x.postId === post.id) : []

    return (
        <ScrollView style={styles.container}>
            <Post post={postDetail} user={user} />
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeadingText}>Comments</Text>
            </View>
            {commentsByPost ? <FlatList
                style={styles.paddingH15}
                data={commentsByPost}
                renderItem={({ item, index }) => {
                    return <Comment key={item.id} comment={item} />
                }}
            /> : <ActivityIndicator />}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: Colors.WHITE,
    },
    paddingH15: { paddingHorizontal: 15 },
    sectionHeader: {
        backgroundColor: Colors.WHITE, paddingHorizontal: 15
    },
    sectionHeadingText: {
        fontWeight: 'bold', fontSize: 18
    }
})

const mapStateToProps = (state) => {

    return {
        users: state.users,
        posts: state.posts,
        comments: state.comments,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (payload) => dispatch(AppMiddleware.getComments(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

