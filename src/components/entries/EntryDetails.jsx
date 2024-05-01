import { useEffect, useState } from "react";
import { Link, Navigate, useFetcher, useNavigate, useParams } from "react-router-dom";
import { deleteGame, getGame } from "../Services/gameService.jsx";
import { getCurrentUser } from "../Services/userService.jsx"


export const GameDetails = () => {
  const [game, setGame] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const { id } = useParams();
  const Navigate = useNavigate

  useEffect(() => {
      // Getting and setting the details of a specific game
      getGame(id).then(setGame);
  }, [id]);

  useEffect(() => {
      getCurrentUser().then(setCurrentUser)
  }, [])

  const handleDelete = () => {
    deleteGame(id).then(() => {
      Navigate("/games")
    })
  }

  return <> 
        <div className="container">
    <h1 className="title">{game.title}</h1>
    <div className="details">
      <strong>Designer:</strong> {game.designer}
    </div>
    <div className="details">
      <strong>Year Released:</strong> {game.yearReleased}
    </div>
    <div className="details">
      <strong>Number of Players:</strong> {game.numberOfPlayers}
    </div>
    <div className="details">
      <strong>Estimated Time to Play:</strong> {game.estimatedTimeToPlay}
    </div>
    <div className="details">
      <strong>Age Recommendation:</strong> {game.ageRecommendation}
    </div>
    <div className="categories">
      <strong>Categories:</strong>
      <ul>
        {game.categories
          ? game.categories.map((category) => (
              <li key={category.id}>{category.label}</li>
            ))
          : <></>}
      </ul>
    </div>
    <div className="description">
      <strong>Description:</strong>
      <p>{game.description}</p>
    </div>
    {game.imageUrl && (
      <div className="image">
        <img src={game.imageUrl} alt={game.title} />
      </div>
    )}
    <div className="buttons">
      {currentUser?.id === game.user?.id && (
        <>
          <button type="button">
            <Link to={`/games/${game.id}/edit`}>Edit Game</Link>
          </button>
          <button type="button" onClick={handleDelete}>Delete Game</button>
        </>
      )}
      <button type="button">
        <Link to={`/games/${game.id}/review`}>Review Game</Link>
      </button>
    </div>
    <div className="reviews">
      <p>{game.title} Reviews:</p>
      <ul>
        {game.reviews
          ? game.reviews.map((review) => (
              <li key={review.id} className="review">
                {review.text}
                <p>~{review.user.firstName} {review.user.lastName}</p>
              </li>
            ))
          : <></>}
      </ul>
    </div>
  </div>
  </>;
};
