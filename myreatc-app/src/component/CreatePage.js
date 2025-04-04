import { useState } from "react"; // ✅ Import useState
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

function CreatePage({ addPage }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate(); // ✅ useNavigate hook is now available

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            const newPage = { id: Date.now(), title, content };
            addPage(newPage);
            navigate(`/pages/${newPage.id}`); // ✅ Navigating after page creation
        }
    };

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create New Page</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Page Title"
                    className="w-full p-2 border"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Page Content"
                    className="w-full p-2 border h-40"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">Create</button>
            </form>
        </div>
    );
}

export default CreatePage;
