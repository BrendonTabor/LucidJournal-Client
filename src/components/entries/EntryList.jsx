import { useEffect, useState } from "react"
import { getGames } from "../Services/gameService.jsx"
import { Link } from "react-router-dom"
import { GameDetails } from "./GameDetails.jsx"

export const GameList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        //Fetch call to retrieve games, then using the .then method sets the games into games
        getGames().then(setGames) 
    }, [])

    return <>
        <section>
            <ul>
                {games.map((game) => {
                    return <li key={game.id}>
                        <Link to={`/games/${game.id}`}>{game.title}</Link>

                        {/* <GameDetails />
                        <link to={`/games/${game.id}`}><GameDetails game={game} /> </link> */}
                    </li>
                })}
            </ul>
        </section>
    </>
}