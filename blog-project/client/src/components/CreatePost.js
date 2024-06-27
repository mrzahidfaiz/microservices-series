import { useState } from "react"
import axios from 'axios';

export default () => {
    const [ title, setTitle] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle('');
    }

    return (
        <main>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                    <button>Submit</button>
                </div>
            </form>
        </main>
    )
}