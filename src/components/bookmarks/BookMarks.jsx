import Bookmark from "../bookmark/Bookmark";


const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-slate-50">
            <div>
                <h3 className="text-4xl font-bold mb-4">Reading Time: {readingTime}</h3>
            </div>
            <h1 className="text-2xl font-semibold text-center">Total Bookmarks length: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default BookMarks;