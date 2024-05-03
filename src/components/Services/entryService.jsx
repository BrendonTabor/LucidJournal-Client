export const createEntry = (entryObj) => {
    return fetch("http://localhost:8000/entries", {
    method: "POST",
    headers: {
        Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObj)    
    })
};

export const getEntries = () => {
    return fetch(`http://localhost:8000/entries`, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token
            }`,
            "Content-Type": "application/json"
        },
    }).then(res => res.json());
};

export const getEntry = (id) => {
    return fetch(`http://localhost:8000/entries/${id}`, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token
            }`,
            "Content-Type": "application/json"
        },
    }).then((res) => res.json())
}

export const updateEntry = (id, entryObj) => {
    return fetch(`http://localhost:8000/entries/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    }).then(res => res.json());
};

export const deleteEntry = (id) => {
    return fetch(`http://localhost:8000/entries/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("user_token")).token}`,
            "Content-Type": "application/json"
        }
    })
}