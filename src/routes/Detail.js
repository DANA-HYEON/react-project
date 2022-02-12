import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    // url의 변경되는 값 id를 가져오기
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const getMovie = async() => {
        const json = await(await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
        setMovie(json.data.movie);
        setLoading((current) => !current);
    }
    console.log(movie);

    useEffect(async()=>{
        getMovie();        
    },[]);

    return(
        <div>
            {loading ? <h1>Loading...</h1> : 
            
            <div>
                <h1>{movie.title} ({movie.rating})</h1>
                <img src={movie.large_cover_image} alt="poster"/>
                <ul>
                    { movie.genres.map((genre) => 
                        <li key={genre}>{genre}</li>
                        )
                    }
                </ul>
            </div>
            }
        </div>
    );
}

export default Detail;
