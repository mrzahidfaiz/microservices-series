import axios from "axios";
import { useState } from "react"


export default ({postId}) => {
    const [content, setContent] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content});

        setContent('');
    }
    return (
        <main>
            <form onSubmit={submitHandler}>
                <label>create Comment</label>
                <input value={content} onChange={e => setContent(e.target.value)} />
                <button>Submit</button>
            </form>
        </main>
    )
}