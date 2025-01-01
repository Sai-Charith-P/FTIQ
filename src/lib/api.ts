declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return response.json();
  },
  // Add other methods as needed
}; 