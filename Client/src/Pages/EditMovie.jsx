import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate() ;
    const genreOptions = ["Action", "Comedy", "Drama", "Horror", "Romance"];

    const [movieData, setMovieData] = useState({
        moviename : "",
        description : "" ,
        genre : [] ,
    }) ;

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMovieData({
            ...movieData ,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = async(e) => {
        // console
        // e.prevent.default() ;
        e.preventDefault() ;
        setLoading(true) ;
        const formData = new FormData() ;
        formData.append("moviename" , movieData.moviename) ;
        formData.append("description" , movieData.description) ;
        formData.append("genre" , JSON.stringify(movieData.genre)) ;
        console.log(JSON.stringify(movieData.genre))
        console.log(movieData.description)

        const LoadingToast = toast.loading("deleting movie....") ;

        try {
            // console.log("hello") ;
            const response = await axios.put(`${API_BASE_URL}/movie/updateMovie/${id}` , 
            formData , 
            {headers : {
                "Content-Type": "multipart/form-data"
            }}
            )
            if(response.data.success){
                toast.success(response.data.message , {id: LoadingToast}) 
                navigate(`/movie/${id}`)
                window.location.reload();
            }else{
                toast.error(response.data.message , {id: LoadingToast})
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something Went Wrong" , {id : LoadingToast})
        }
    }

  return (
    <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add Movie</h2>
            {message && <p className="text-green-500">{message}</p>}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                    <label className="block font-medium">Movie Name:</label>
                    <input type="text" name="moviename" placeholder="Enter movie name" 
                        className="w-full p-2 border rounded"
                        value={movieData.moviename} onChange={handleChange} />
                </div>

                <div>
                    <label className="block font-medium">Description:</label>
                    <textarea name="description" placeholder="Enter description"  
                        className="w-full p-2 border rounded"
                        value={movieData.description} onChange={handleChange} />
                </div>

                <div>
                    <label className="block font-medium">Genre (Select multiple):</label>
                    <div className="grid grid-cols-2 gap-2">
                        {genreOptions.map((genre) => (
                            <label key={genre} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={genre}
                                    checked={movieData.genre.includes(genre)}
                                    onChange={(e) => {
                                        const selectedGenres = movieData.genre.includes(genre)
                                            ? movieData.genre.filter((g) => g !== genre)
                                            : [...movieData.genre, genre];
                                        setMovieData({ ...movieData, genre: selectedGenres });
                                    }}
                                />
                                <span>{genre}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full" disabled={loading}>
                    {loading ? "Editting..." : "Edit Movie"}
                </button>
            </form>
        </div>
  )
}

export default EditMovie
