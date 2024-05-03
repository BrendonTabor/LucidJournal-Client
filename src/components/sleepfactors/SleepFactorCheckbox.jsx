import { useEffect, useState } from "react"
import { getSleepFactors } from "../Services/sleepfactorservice.jsx"



export const SleepFactorCheckbox = ({entryData, setEntryData}) => {
    const [sleepfactors, setSleepFactors] = useState([])

    useEffect(() => {
        //retrieve the list of categories
        getSleepFactors().then(setSleepFactors)
    }, [entryData])

    const handleSleepFactorChange = (sleepfactorId) => {
          const isSelected = entryData.dreamfactors.includes(sleepfactorId)
          if(isSelected){
              setEntryData({
                ...entryData,
                dreamfactors: entryData.dreamfactors.filter(id => id !== sleepfactorId)
              })
          } else {
              setEntryData({
                ...entryData,
                dreamfactors: [...entryData.dreamfactors, sleepfactorId]
              })

          }

        };

      return (
        <div>
          <label>Sleepfactors</label>
          {sleepfactors.map((sleepfactor) => (
            <div key={sleepfactor.id}>
              <label>
                <input
                  type="checkbox"
                  checked={entryData.dreamfactors.includes(sleepfactor.id)}
                  onChange={() => handleSleepFactorChange(sleepfactor.id)}
                />
                {sleepfactor.label}
              </label>
            </div>
          ))}
        </div>

      )

}