import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { createEntry, updateEntry, getEntry } from "../Services/entryService.jsx";
import { SleepFactorCheckbox } from "../sleepfactors/sleepfactorcheckbox.jsx";

export const EntryForm = () => {
    // const [categories, setCategories] = useState([])
    const [entryData, setEntryData] = useState({
        title: '',
        description: '',
        date_recorded: '',
        wake_method: 0,
        rem_count: 0,
        sleepfactors: []
      });
    const { id } = useParams()

    useEffect(() => {
        // get all the sleep factors involved with a dream
        if(id){
            getEntry(id).then((entry) => {
              delete entry.user
              delete entry.id
              entry.sleepfactors = entry.sleepfactors.map(sleepfactor => sleepfactor.id)
              setEntryData(entry)
            })
        }
    }, [id])

      const handleChange = (e) => {
        setEntryData({
          ...entryData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = () => {
        // entryData gets sent to the service
        if(id){
          updateEntry(id, entryData)
        } else {
        createEntry(entryData)
        }
      };

    return (
    <div>
        <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={entryData.title} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={entryData.description} onChange={handleChange}></textarea>
        </div>
        <div>
        <label htmlFor="date_recorded">Date Created:</label>
        <input type="date" id="date_recorded" name="date_recorded" value={entryData.date_recorded} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="wake_method">Wake Method:</label>
        <input type="number" id="wake_method" name="wake_method" value={entryData.wake_method} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="rem_count">Rem count:</label>
        <input type="number" id="rem_count" name="rem_count" value={entryData.rem_count} onChange={handleChange} />
        </div>
        <SleepFactorCheckbox entryData={entryData} setEntryData={setEntryData}/>

        <button type="button" onClick={handleSubmit}>
        Save Entry
        </button>
    </div>
    );
}