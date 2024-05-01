import axios from "axios";

interface ShortenResponse {
  result_url: string;
}

export async function shortenUrl(url: string): Promise<ShortenResponse> {
  try {
    const response = await axios.post<ShortenResponse>(
      "https://cleanuri.com/api/v1/shorten",
      {
        url: encodeURIComponent(url),
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to shorten URL. Please try again.");
  }
}
