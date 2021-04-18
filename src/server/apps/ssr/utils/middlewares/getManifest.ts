import { Handler } from "express";
import { readFileSync } from "fs";

const getObjectManifest = () => {
  try {
    return JSON.parse(
      readFileSync(__dirname + "/../../public/manifest.json").toString()
    );
  } catch (error) {
    console.log(error);
    return {};
  }
};

declare global {
  namespace Express {
    interface Request {
      hashManifest: Record<string, string>;
    }
  }
}
const getManifest: Handler = (req, _res, next) => {
  if (!req.hashManifest) req.hashManifest = getObjectManifest();
  next();
};

export default getManifest;
