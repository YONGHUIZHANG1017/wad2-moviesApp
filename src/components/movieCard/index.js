import React from "react";
import {Link} from "react-router-dom";
import {Card} from 'antd';
import "./movieCard.css";
import "../../globals/fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {
  return (
    <div className="col-sm-3" style={{marginBottom: 10}}>
      <Link to={`/movies/${movie.id}`}>
        <Card className='movie-card' hoverable cover={<img
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />}>
          <Card.Meta
            style={{padding: 16}}
            title={movie.title}
            description={<>
              {movie.release_date}
              <div style={{float: 'right'}}>
                <FontAwesomeIcon icon={["fas", "star"]}/>
                <span> {movie.vote_average}</span>
              </div>
            </>}/>
          {action && <div className="card-footer">
            {action(movie)}
          </div>}
        </Card>
      </Link>

    </div>
  );
};

export default MovieCard;
