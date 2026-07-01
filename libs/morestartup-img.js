import fs from "fs/promises";
import path from "path";
import Image from "next/image";

export default async function getMoreStartUpImg() {
  const folderPath = path.join(
    process.cwd(),
    "public",
    "image",
    "more_startup",
  );

  const files = await fs.readdir(folderPath);

  const images = files
    .filter((file) => /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(file))
    .map((file) => `/image/more_startup/${file}`);

  return images
}
