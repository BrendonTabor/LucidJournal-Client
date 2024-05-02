import { useEffect, useState } from "react";
import { Link, Navigate, useFetcher, useNavigate, useParams } from "react-router-dom";
import { getCurrentUser } from "../Services/userService.jsx"
import { getEntry, deleteEntry, updateEntry } from "../Services/entryService.jsx";


export const EntryDetails = () => {
  const [entry, setEntry] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const { id } = useParams();
  const Navigate = useNavigate()

  useEffect(() => {
      // Getting and setting the details of a specific game
      getEntry(id).then(setEntry);
  }, [id]);

  useEffect(() => {
      getCurrentUser().then(setCurrentUser)
  }, [])

  const handleDelete = () => {
    deleteEntry(id).then(() => {
      Navigate("/entries")
    })
  }

  return <> 
        <div className="container">
    <h1 className="title">{entry.title}</h1>
    <div className="details">
      <strong>Date Made</strong> {entry.date_recorded}
    </div>
    <div className="details">
      <strong>Title</strong> {entry.title}
    </div>
    <div className="details">
      <strong>Description</strong> {entry.description}
    </div>
    <div className="dreamfactors">
      <strong>Sleepfactors:</strong>
      <ul>
        {entry.dreamfactors
          ? entry.dreamfactors.map((sleepfactor) => (
              <li key={sleepfactor.id}>{sleepfactor.label}</li>
            ))
          : <></>}
      </ul>
    </div>
    <div className="buttons">
      <button type="button">
            <Link to={`/entries/${entry.id}/edit`}>Edit Game</Link>
          </button>
      <button type="button" onClick={handleDelete}>Delete Game</button>
    </div>
  </div>
  </>;
};
