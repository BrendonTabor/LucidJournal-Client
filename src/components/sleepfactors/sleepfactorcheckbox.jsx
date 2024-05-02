import { useEffect, useState } from "react"
import { getSleepFactors } from "../Services/sleepfactorservice.jsx"



export const SleepFactorCheckbox = ({entryData, setEntryData}) => {
    const [sleepfactors, setSleepFactors] = useState([])

    useEffect(() => {
        //retrieve the list of sleep factors
        getSleepFactors().then(setSleepFactors)
    }, [entryData])

    const handleCategoryChange = (sleepfactorId) => {
          const isSelected = entryData.sleepfactors.includes(sleepfactorId)
          if(isSelected){
              setEntryData({
                ...entryData,
                sleepfactors: entryData.sleepfactors.filter(id => id !== sleepfactorId)
              })
          } else {
              setEntryData({
                ...entryData,
                sleepfactors: [...entryData.sleepfactors, sleepfactorId]
              })

          }

        };

      return (
        <div>
          <label>Sleep Factors</label>
          {sleepfactors.map((sleepfactor) => (
            <div key={sleepfactor.id}>
              <label>
                <input
                  type="checkbox"
                  checked={entryData.sleepfactors.includes(sleepfactor.id)}
                  onChange={() => handleCategoryChange(sleepfactor.id)}
                />
                {sleepfactor.label}
              </label>
            </div>
          ))}
        </div>

      )

}