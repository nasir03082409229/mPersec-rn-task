import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Comment, Post, Text } from '../../Components'
import AppMiddleware from '../../Store/Middleware/AppMiddleware';


const PostDetail = ({ route, users, posts, getComments, comments }) => {

    const { post } = route.params;
    const postDetail = posts.find(x => x.id === post.id)
    const user = users.find(x => x.id === postDetail.userId)

    useEffect(() => {
        getComments()
    }, [])

    const commentsByPost = comments ? comments?.filter(x => x.postId === post.id) : []
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', }}>
            <Post post={postDetail} user={user} />
            <View style={{ backgroundColor: '#fff', paddingHorizontal: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Comments</Text>
            </View>
            {commentsByPost ? <FlatList
                style={{ flex: 1, paddingHorizontal: 15 }}
                data={commentsByPost}
                renderItem={({ item, index }) => {
                    return <Comment comment={item} />
                }}
            /> : <ActivityIndicator />}
        </ScrollView>
    );
}


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

