import React from 'react';
import {Routes , Route, useParams} from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import HomeBook from './pages/HomeBook';

export const App = () => {
  const { id } = useParams();
  return (
    <Routes>
      
      <Route path='/' element={<HomeBook />} />
      <Route path='/books/create' element ={<CreateBook />}/>
      <Route path='/books/details/:id' element ={<ShowBook />}/>
      <Route path='/books/delete/:id' element ={<DeleteBook />}/>
      <Route path='/books/edit/:id' element ={<EditBook />}/>
    </Routes>
  )
}

export default App;
