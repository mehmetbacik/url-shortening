interface ApiResponse {
  status: number;
  message: string;
  data: any;
}

interface ShortenedUrl {
  originalUrl: string;
  shortUrl: string;
  longUrl: string;
  shortUrl: string;
}

interface UrlShortenerService {
  shortenUrl(url: string): Promise<any>;
}
