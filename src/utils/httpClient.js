const API = 'https://api.themoviedb.org/3'

export function get(path){
        return fetch(API + path , {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTAxMTBhYjUwYWIyZTRiMTE1M2RkMTZjOWY3ODRlMSIsInN1YiI6IjYwYjUwMmQzYzc0MGQ5MDA1OTQyNGI0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zt2VzYH6PoqtGiapo_6bWr10Q-VQS7EhZhriwCrGxUY",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then((result) => result.json())  
}