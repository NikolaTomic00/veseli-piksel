export type StylePreset = {
  slug: string;
  label: string;
  description: string;
  thumbnailPath: string;
  thumbnailAlt: string;
  prompt: string;
};

export const stylePresets: StylePreset[] = [
  {
    slug: "storybook-3d",
    label: "Priča 3D",
    description: "Meko filmsko osvetljenje sa uglađenim 3D ilustrativnim detaljima.",
    thumbnailPath: "/storybook-example.png",
    thumbnailAlt: "Primer Priča 3D stila",
    prompt:
      "Transform the uploaded image into a premium storybook-inspired 3D illustration. Preserve the original subject identity, pose, framing, major objects, and scene relationships. Add soft depth, warm cinematic lighting, tactile materials, and a polished animated-film finish.",
  },
  {
    slug: "anime-cel",
    label: "Anime Cel",
    description: "Čisto cel senčenje sa izražajnim bojama i oštrim konturama.",
    thumbnailPath: "/anime-cel-example.png",
    thumbnailAlt: "Primer Anime Cel stila",
    prompt:
      "Restyle the uploaded image as high-end anime cel art. Preserve the exact subject, pose, composition, outfit details, and background structure. Use clean linework, elegant cel shading, expressive color contrast, and polished studio-animation clarity.",
  },
  {
    slug: "clay-render",
    label: "Glina Render",
    description: "Ručno rađena tekstura gline sa vajarskim oblicima i toplom dubinom.",
    thumbnailPath: "/clay-render-example.png",
    thumbnailAlt: "Primer Glina Render stila",
    prompt:
      "Turn the uploaded image into a handcrafted clay-render scene. Preserve identity, framing, silhouette, and important scene details. Use sculpted clay textures, soft rounded forms, subtle imperfections, and warm premium lighting.",
  },
  {
    slug: "pixart",
    label: "Pixart",
    description: "Svetli, izražajni porodično-animirani stil sa uglađenim 3D šarmom.",
    thumbnailPath: "/pixart-example.png",
    thumbnailAlt: "Primer Pixart stila",
    prompt:
      "Transform the uploaded image into a premium family-animation-inspired 3D illustration. Preserve the original subject identity, expression, pose, framing, outfit details, and important background structure. Use expressive features, charming stylization, warm lighting, and polished animated-film rendering without changing the core composition.",
  },
  {
    slug: "voxel-block",
    label: "Voxel Blok",
    description: "Kockasti stil građen od blokova sa igrivim formama i pikselizovanom dubinom.",
    thumbnailPath: "/voxel-block-example.png",
    thumbnailAlt: "Primer Voxel Blok stila",
    prompt:
      "Transform the uploaded image into a premium voxel block-world illustration with cubic forms, pixel-crafted surfaces, simplified geometry, and bright game-like lighting. Preserve the subject identity, pose, framing, outfit details, and major scene structure while changing only the artistic style.",
  },
  {
    slug: "marble-sculpture",
    label: "Mermerna Skulptura",
    description: "Elegantan portret u rezanom kamenu sa profinjenom teksturom i muzejskim osvetljenjem.",
    thumbnailPath: "/marble-sculpture-example.png",
    thumbnailAlt: "Primer Mermerna Skulptura stila",
    prompt:
      "Transform the uploaded image into a refined marble sculpture portrait. Preserve the original subject identity, pose, framing, and major scene relationships while translating the image into carved stone with elegant chiselled detail, subtle surface veining, soft museum-style lighting, and a premium gallery finish.",
  },
];

export function getStylePreset(slug: string) {
  return stylePresets.find((preset) => preset.slug === slug);
}
