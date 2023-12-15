import { fileExists, readFile, writeFile } from './file';
import path from 'path';

export const getCachePath = (id) => {
  const pathName = `./build/cache/${id}.json`;

  return path.resolve(process.cwd(), pathName);
};

export const fetchWithCache = async (id, req) => {
  const pathName = getCachePath(id);
  // let timeout = await new Promise((resolve) => setTimeout(resolve, 1000));

  if (fileExists(pathName)) {
    console.log('about to read file for', pathName);
    const file = await readFile(pathName);

    console.log('This is the file:', file);

    return await file;
  } else {
    // console.log('about to fetch file for', req);

    let res = await fetch(req);
    let result = await res.json();

    // console.log('data retrieved, about to write to', pathName);
    // console.log('data to be written:', result);

    await writeFile(pathName, result);

    return result;
  }
};

export const fetchGitHubUser = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  return await fetchWithCache(`github-users/${username}`, url);
};
