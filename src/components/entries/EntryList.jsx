import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getEntries } from "../Services/entryService.jsx"

export const EntryList = () => {
    const [entries, setEntrees] = useState([])

    useEffect(() => {
        //Fetch call to retrieve games, then using the .then method sets the games into games
        getEntries().then(setEntrees) 
    }, [])

    return <>
        <section>
            <ul>
                {entries.map((entry) => {
                    return <li key={entry.id}>
                        <Link to={`/entries/${entry.id}`}>{entry.title}</Link>

                        {/* <GameDetails />
                        <link to={`/games/${game.id}`}><GameDetails game={game} /> </link> */}
                    </li>
                })}
            </ul>
        </section>
    </>
}