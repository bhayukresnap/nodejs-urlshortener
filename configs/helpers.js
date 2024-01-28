import dotenv from 'dotenv';
import Path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
export const PORT = process.env.PORT;

export const rootFolder = (folderName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = Path.dirname(__filename);
  return Path.join(__dirname, `../${folderName}`);
};

export const DB_CREDENTIALS = {
  db_name: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  connection: process.env.DATABASE_CONNECTION,
  host: process.env.DATABASE_HOST,
  storage: process.env.DATABASE_STORAGE,
};
