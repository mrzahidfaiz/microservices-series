import { useEffect, useState } from "react"
import axios from 'axios';
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";

export default () => {
    const [posts, setPosts] = useState({});
    const fetchedPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    }

    useEffect(() => { fetchedPosts() }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div key={post.id}>
                <h3> Blog Title: {post.title}</h3>
                <CommentList postId={post.id} />
                <CreateComment postId={post.id} />

            </div>
        )
    });

    return (
        <>
            {renderedPosts}
        </>
    )
}