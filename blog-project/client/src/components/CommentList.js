import axios from "axios";
import { useEffect, useState } from "react"



export default ({ comments }) => {
    // const [comments, setComments] = useState([]);

    // const fetchedComments =async () => {
    //    const res=  await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    //    setComments(res.data);
    // }

    // useEffect(()=> {
    //     fetchedComments();
    // }, []);

    const renderComments = comments.map(comment => {

        let content;
        if(comment.status === 'approved') {
            content = comment.content;
        }

        if(comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        if(comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return <li key={comment.id}> {content} </li>

    })
    return (
        <ul>
            {renderComments}
        </ul>
    )
}