import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handlerBookDelete = () => {
    
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      }).catch((error) => {
        alert('An error occured');
        console.log(error);
      })
  }
  return (
    <div className='p-4' >
      <BackButton />
      <h1 className='text-3xl my-4' >Delete Book</h1>
      {loading ? <Spinner /> : ''}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 nx-auto' >
        <h3 className='text-2xl' >Are You Sure to Delete This Book !</h3>

        <button
        className='p-4 bg-red-500 text-white n-8 w-full '
        onClick={handlerBookDelete} 
        >
           Yes
        </button>

      </div>
    </div>
  )
}

export default DeleteBook;