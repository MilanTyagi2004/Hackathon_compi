import React from "react";
import { Link } from "react-router-dom";

function AllPages({ pages }) {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Created Pages</h2>
      {pages.length === 0 ? (
        <p className="text-gray-600">No pages created yet.</p>
      ) : (
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.id} className="bg-white p-4 rounded shadow">
              <Link
                to={`/pages/${page.id}`}
                className="text-blue-600 font-semibold text-lg"
              >
                {page.title}
              </Link>
              <p className="text-sm text-gray-500">ID: {page.id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllPages;
