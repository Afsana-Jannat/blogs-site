
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/bookmarks/BookMarks'
import Header from './components/header/header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between max-w-7xl mx-auto'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
