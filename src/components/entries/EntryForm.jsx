import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { createEntry, updateEntry, getEntry } from "../Services/entryService.jsx";
import { SleepFactorCheckbox } from "../sleepfactors/SleepFactorCheckbox.jsx";
import { RemCountSelect } from "../remcount/remCountSelect.jsx";
import { WakeMethodSelect } from "../wakemethod/wakeMethodSelect.jsx";

export const EntryForm = () => {
    const [entryData, setEntryData] = useState({
        title: '',
        description: '',
        date_recorded: '',
        wake_method: '',
        rem_count: '',
        dreamfactors: []
      });
    const { id } = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        // get all the sleep factors involved with a dream
        if(id){
            getEntry(id).then((entry) => {
              delete entry.user
              delete entry.id
              entry.wake_method = entry.wake_method.id
              entry.rem_count = entry.rem_count.id
              entry.date_recorded = entry.date_recorded
              entry.dreamfactors = entry.dreamfactors.map(factor => factor.id)
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
          Navigate("/entries")
        } else {
        createEntry(entryData).then(() => {
          Navigate("/entries")
        })
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

        <RemCountSelect entryData={entryData} setEntryData={setEntryData} />
        
        <WakeMethodSelect entryData={entryData} setEntryData={setEntryData} />

        <SleepFactorCheckbox entryData={entryData} setEntryData={setEntryData}/>

        <button type="button" onClick={handleSubmit}>
        Save Entry
        </button>
    </div>
    );
}