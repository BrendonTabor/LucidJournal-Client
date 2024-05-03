export const getRemCount = () => {
    return fetch(`http://localhost:8000/remcount`, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token
            }`,
            "Content-Type": "application/json"
        },
    }).then(res => res.json());
};