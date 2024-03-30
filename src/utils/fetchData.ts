const BASE_URL = "https://0rk00cd8-7174.inc1.devtunnels.ms/api";
const CACHE = { cache: "no-store" };

interface FetchProps {
    id?: string; 
    uri: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    accessToken: string;
}

export const fetchData = async <T>({uri, method, accessToken}: FetchProps): Promise<T[] | undefined> => {
  try{
    const response = await fetch(`${BASE_URL}/${uri}`, {
        method: method,
        headers: { 
            "Content-Type": "application/json", 
            "Accept-Language": "ru-RU",
            "Authorization": `Bearer ${accessToken}`
        },
    });
   
    const data: T[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchDataById = async <T>({uri, method, accessToken}: FetchProps): Promise<T | undefined> => {
  try{
    const response = await fetch(`${BASE_URL}/${uri}`, {
        method: method,
        headers: { 
            "Content-Type": "application/json", 
            "Accept-Language": "ru-RU",
            "Authorization": `Bearer ${accessToken}`
        },
    });
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteData = async({id, uri, method, accessToken}: FetchProps): Promise<void> => {
    try{
        const response = await fetch(`${BASE_URL}/${uri}/${id}`, {
            method: method,
            headers: { 
                "Content-Type": "application/json", 
                "Accept-Language": "ru-RU",
                "Authorization": `Bearer ${accessToken}`
            },
        });

        console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

export const postData = async <T>(uri: string, body: T): Promise<Response | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/${uri}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
