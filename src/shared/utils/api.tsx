const API_BASE_URL = "http://localhost:3000/api";

export const apiRequest = async <D = any,>(
  endpoint: string,
  method: string,
  data?: D
) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: data ? JSON.stringify(data) : null,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`${response.status} - ${errorMessage}`);
  }
  return response.json();
};
