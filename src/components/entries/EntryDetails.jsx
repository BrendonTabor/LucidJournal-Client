import { useEffect, useState } from "react";
import { Link, Navigate, useFetcher, useNavigate, useParams } from "react-router-dom";
import { deleteEntry, get } from "../Services/gameService.jsx";
import { getCurrentUser } from "../Services/userService.jsx"
import { getEntry } from "../Services/entryService.jsx";


export const EntryDetails = () => {
  const [entry, setEntry] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const { id } = useParams();
  const Navigate = useNavigate

  useEffect(() => {
      // Getting and setting the details of a specific game
      getEntry(id).then(setEntry);
  }, [id]);

  useEffect(() => {
      getCurrentUser().then(setCurrentUser)
  }, [])

  const handleDelete = () => {
    deleteGame(id).then(() => {
      Navigate("/entries")
    })
  }

  return <> 
        <div className="container">
    <h1 className="title">{entry.title}</h1>
    <div className="details">
      <strong>Designer:</strong> {entry.designer}
    </div>
    <div className="details">
      <strong>Year Released:</strong> {entry.yearReleased}
    </div>
    <div className="details">
      <strong>Number of Players:</strong> {entry.numberOfPlayers}
    </div>
    <div className="details">
      <strong>Estimated Time to Play:</strong> {entry.estimatedTimeToPlay}
    </div>
    <div className="details">
      <strong>Age Recommendation:</strong> {entry.ageRecommendation}
    </div>
    <div className="categories">
      <strong>Categories:</strong>
      <ul>
        {entry.categories
          ? entry.categories.map((category) => (
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
