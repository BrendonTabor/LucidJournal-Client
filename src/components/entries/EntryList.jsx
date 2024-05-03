import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getEntries } from "../Services/entryService.jsx"

export const EntryList = () => {
    const [entries, setEntrees] = useState([])

    useEffect(() => {
        //Fetch call to retrieve entries, then using the .then method sets the entries into entry
        getEntries().then(setEntrees) 
    }, [])

    return <>
        <section>
            <ul>
                {entries.map((entry) => {
                    return <li key={entry.id}>
                        <h1><Link to={`/entries/${entry.id}`}>{entry.title}</Link></h1>
                        <h2>{entry.description}</h2>
                    </li>
                })}
            </ul>
        </section>
    </>
}