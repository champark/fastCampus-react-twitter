import { FiImage } from "react-icons/fi";

export interface PostProps {
    id: string;
    email: string;
    content: string;
    createdAt: string;
    uid: string;
}

const posts: PostProps[] = [
    {
        id: "1",
        email: "test@test.com",
        content: "내용입니다",
        createdAt: "2023-08-30",
        uid: '123123',
    },
    {
        id: "2",
        email: "test@test.com",
        content: "내용입니다",
        createdAt: "2023-08-30",
        uid: '123123',
    },
    {
        id: "3",
        email: "test@test.com",
        content: "내용입니다",
        createdAt: "2023-08-30",
        uid: '123123',
    },
    {
        id: "4",
        email: "test@test.com",
        content: "내용입니다",
        createdAt: "2023-08-30",
        uid: '123123',
    },
    {
        id: "5",
        email: "test@test.com",
        content: "내용입니다",
        createdAt: "2023-08-30",
        uid: '123123',
    },
    {
        id: "6",
        email: "test@test.com",
        content: "내용입니다",
        createdAt: "2023-08-30",
        uid: '123123',
    },
]

export default function HomePage() {
    const handleFileUpload = () => {

    };
    return (
        <div className="home">
            <div className="home__title">Home</div>
            <div className="home__tabs">
                <div className="home__tab home__tab--active">For You</div>
                <div className="home__tab">Following</div>
            </div>
            {/* Post Form */}
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
            <div>
            {/* Tweet posts */}
            {/*11:46까지 진행 */}
            </div>
        </div>
    );
}