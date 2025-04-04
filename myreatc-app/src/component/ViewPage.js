import { useParams } from "react-router-dom"; // ✅ Import this at the top

function ViewPage({ pages }) {
    const { id } = useParams(); // ✅ Extracting dynamic param
    const page = pages.find((p) => p.id.toString() === id); // Matching with stringified ID

    if (!page) return <div className="p-10 text-red-500">Page not found</div>;

    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{page.title}</h2>
            <p>{page.content}</p>
        </div>
    );
}

export default ViewPage;
