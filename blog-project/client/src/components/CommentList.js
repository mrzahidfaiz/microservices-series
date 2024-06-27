import axios from "axios";
import { useEffect, useState } from "react"



export default ({comments}) => {
    // const [comments, setComments] = useState([]);

    // const fetchedComments =async () => {
    //    const res=  await axios.get(`http://localhost:4001/posts/${postId}/comments`);
       
    //    setComments(res.data);
    // }

    // useEffect(()=> {
    //     fetchedComments();
    // }, []);

    const renderComments = comments.map(comment => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        )
    })
    return (
        <ul>
            {renderComments}
        </ul>
    )
}