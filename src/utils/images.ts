import type { ImageMetadata } from "astro";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

export function getAssetImage(relativePath: string): ImageMetadata | undefined {
  const cleanPath = relativePath.replace(/^\/+/, "");
  const fullKey = `/src/assets/images/${cleanPath}`;
  return imageModules[fullKey]?.default;
}

export function getAssetImageUrl(relativePath: string): string {
  const img = getAssetImage(relativePath);
  return img ? img.src : "";
}
