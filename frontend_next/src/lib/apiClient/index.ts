const baseURL = 'http://localhost:8000';

export const createGetApi = async (url: string) => {
  const response = await fetch(baseURL + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test_token',
    },
  });
  console.log("===== createGetApi =====");
  return (await response.json()).data;
};

export const createGetIsrApi = async (url: string) => {
  const response = await fetch(baseURL + url, {
    next: { revalidate: 5 },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test_token',
    },
  });
  console.log("===== createGetIsrApi =====");
  return (await response.json()).data;
};