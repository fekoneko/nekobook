import Next from 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      NEXTAUTH_SECRET: string;
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      MONGO_URI: string;
    }
  }
}
