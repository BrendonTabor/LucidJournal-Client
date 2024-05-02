export const getSleepFactors = () => {
    return fetch(`http://localhost:8000/sleepfactors`, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token
            }`,
            "Content-Type": "application/json"
        },
    }).then(res => res.json());
};