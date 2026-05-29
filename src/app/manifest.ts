import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Endmoon Studio",
    short_name: "Endmoon",
    description: "Bilingual game development and live operations studio website.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f2",
    theme_color: "#25d7b7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
