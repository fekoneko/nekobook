import Next from 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      BASE_URL: string;
      DB_CONNECT_STRING: string;
    }
  }
}
