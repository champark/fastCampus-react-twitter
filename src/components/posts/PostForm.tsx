import { FiImage } from "react-icons/fi";

export default function PostForm() {
    const handleFileUpload = () => { };
    return (
        <form className="post-form">
            <textarea
                className="post-form__textarea"
                required
                name="content"
                id="content"
                placeholder="what is happening?" />
            <div className="post-form__submit-area">
                <label htmlFor="file-input" className="post-form__file">
                    <FiImage />
                </label>
                <input type="file"
                    name="file-input"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                />
                <input type="submit" value="Tweet" className="post-form__submit-btn" ></input>
            </div>
        </form>
    );
}