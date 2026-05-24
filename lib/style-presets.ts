export type StylePreset = {
  slug: string;
  label: string;
  description: string;
  thumbnailPath: string;
  thumbnailAlt: string;
  prompt: string;
  category: "animirani-karakteri" | "profesionalna-profilna-slika" | "portret";
};

export const stylePresets: StylePreset[] = [
  {
    slug: "storybook-3d",
    label: "Priča 3D",
    description:
      "Meko filmsko osvetljenje sa uglađenim 3D ilustrativnim detaljima.",
    thumbnailPath: "/storybook-example.png",
    thumbnailAlt: "Primer Priča 3D stila",
    prompt:
      "Transform the uploaded image into a premium storybook-inspired 3D illustration. Preserve the original subject identity, pose, framing, major objects, and scene relationships. Add soft depth, warm cinematic lighting, tactile materials, and a polished animated-film finish.",
    category: "animirani-karakteri",
  },
  {
    slug: "anime-cel",
    label: "Anime Cel",
    description: "Čisto cel senčenje sa izražajnim bojama i oštrim konturama.",
    thumbnailPath: "/anime-cel-example.png",
    thumbnailAlt: "Primer Anime Cel stila",
    prompt:
      "Restyle the uploaded image as high-end anime cel art. Preserve the exact subject, pose, composition, outfit details, and background structure. Use clean linework, elegant cel shading, expressive color contrast, and polished studio-animation clarity.",
    category: "animirani-karakteri",
  },
  {
    slug: "clay-render",
    label: "Glina Render",
    description:
      "Ručno rađena tekstura gline sa vajarskim oblicima i toplom dubinom.",
    thumbnailPath: "/clay-render-example.png",
    thumbnailAlt: "Primer Glina Render stila",
    prompt:
      "Turn the uploaded image into a handcrafted clay-render scene. Preserve identity, framing, silhouette, and important scene details. Use sculpted clay textures, soft rounded forms, subtle imperfections, and warm premium lighting.",
    category: "animirani-karakteri",
  },
  {
    slug: "pixart",
    label: "Pixart",
    description:
      "Svetli, izražajni porodično-animirani stil sa uglađenim 3D šarmom.",
    thumbnailPath: "/pixart-example.png",
    thumbnailAlt: "Primer Pixart stila",
    prompt:
      "Transform the uploaded image into a premium family-animation-inspired 3D illustration. Preserve the original subject identity, expression, pose, framing, outfit details, and important background structure. Use expressive features, charming stylization, warm lighting, and polished animated-film rendering without changing the core composition.",
    category: "animirani-karakteri",
  },
  {
    slug: "voxel-block",
    label: "Voxel Blok",
    description:
      "Kockasti stil građen od blokova sa igrivim formama i pikselizovanom dubinom.",
    thumbnailPath: "/voxel-block-example.png",
    thumbnailAlt: "Primer Voxel Blok stila",
    prompt:
      "Transform the uploaded image into a premium voxel block-world illustration with cubic forms, pixel-crafted surfaces, simplified geometry, and bright game-like lighting. Preserve the subject identity, pose, framing, outfit details, and major scene structure while changing only the artistic style.",
    category: "animirani-karakteri",
  },
  {
    slug: "marble-sculpture",
    label: "Mermerna Skulptura",
    description:
      "Elegantan portret u rezanom kamenu sa profinjenom teksturom i muzejskim osvetljenjem.",
    thumbnailPath: "/marble-sculpture-example.png",
    thumbnailAlt: "Primer Mermerna Skulptura stila",
    prompt:
      "Transform the uploaded image into a refined marble sculpture portrait. Preserve the original subject identity, pose, framing, and major scene relationships while translating the image into carved stone with elegant chiselled detail, subtle surface veining, soft museum-style lighting, and a premium gallery finish.",
    category: "animirani-karakteri",
  },
  {
    slug: "high-fashion-headshot",
    label: "High-Fashion Headshot",
    description:
      "Profesionalni high-fashion portret sa snažnim kontrastom, čistim svetlom i luksuznom estetikom.",
    thumbnailPath: "/high-fashion-headshot.png?v=2",
    thumbnailAlt: "Primer high-fashion headshot stila",
    prompt:
      "Create a high-fashion close-up headshot of the person in the uploaded reference image. Preserve the exact facial features, identity, pose, and overall likeness from the original photo. The subject wears a dark, professional outfit that subtly blends into a black background. The face is sharply and professionally lit with strong contrast and defined facial structure. Expression is confident with a minimal, subtle smile. Emphasize sharp eyes, clean skin detail, and luxury editorial photography aesthetics. Camera: Phase One XF, 100mm lens. Negative prompt: low contrast, noise, blur, text, watermark, distorted facial features, overexposure, underexposure.",
    category: "profesionalna-profilna-slika",
  },
  {
    slug: "chiaroscuro-headshot",
    label: "Chiaroscuro Headshot",
    description:
      "Kinematografski crno-beli portret u chiaroscuro stilu sa snažnim kontrastom, luksuznim detaljima i dramatičnim osvetljenjem.",
    thumbnailPath: "/chiaroscuro-headshot.png?v=2",
    thumbnailAlt: "Primer chiaroscuro headshot stila",
    prompt:
      "Create a cinematic black-and-white chiaroscuro portrait of the person in the uploaded reference image. Preserve exact facial features, identity, and pose. Use dramatic Rembrandt-style lighting with deep shadows, strong contrast, luxurious detail, and a sophisticated noir aesthetic. Emphasize sculptural facial structure, textured skin detail, and elegant shadow play. Camera: Hasselblad X2D, 90mm lens. Negative prompt: flat lighting, low contrast, color, blur, noise, text, watermark, distorted facial features.",
    category: "profesionalna-profilna-slika",
  },
  {
    slug: "warm-light-headshot",
    label: "Warm and Light Headshot",
    description:
      "Topli profesionalni portret sa prirodnim svetlom, prijatnom atmosferom i pristupačnim izrazom lica.",
    thumbnailPath: "/warm-light-headshot.png?v=2",
    thumbnailAlt: "Primer warm and light headshot stila",
    prompt:
      "Create a warm, professional portrait of the person in the uploaded character reference photo. KEEP THE FACIAL FEATURES THE SAME AS IN THE ORIGINAL. The subject stands upright with arms relaxed at their sides and shoulders soft. A slight lean towards the camera creates approachability. A friendly smile and open, friendly eyes are essential. Attire: light blazer with a pastel-colored shirt. Background: soft, neutral interior. Lighting: natural window light. Camera: Canon EOS R5, 85mm lens. Negative prompt: no face alteration, no age changes, no weight changes, no body distortion, no caricature styling or beauty filters, no excessive skin smoothing, no blurring, no noise, no text, no logos, no watermarks, no artifacts.",
    category: "profesionalna-profilna-slika",
  },
  {
    slug: "cinematic-headshot",
    label: "Cinematic Headshot",
    description:
      "Filmski, editorialni portret sa mekim svetlom, jakim kontrastom i modernom modnom estetikom.",
    thumbnailPath: "/cinematic-headshot.png?v=2",
    thumbnailAlt: "Primer cinematic headshot stila",
    prompt:
      "A highly cinematic portrait of the same person as the reference image, preserving 100% of their facial features and natural proportions. The subject wears a white T-shirt under a blue leather jacket, rendered with realistic fabric textures and soft light reflections, creating a captivating, cinematic composition. The background features a smooth studio gradient, transitioning from dark at the top to light at the bottom, emphasizing depth and contrast around the figure. The lighting is soft, diffused, and cinematic, with balanced highlights that define the face and subtle shadows that add realism and drama. The composition is perfectly centered, conveying a sense of intimacy and emotional depth, while maintaining an elegant editorial tone.",
    category: "profesionalna-profilna-slika",
  },
  {
    slug: "authority-headshot",
    label: "Authority Headshot",
    description:
      "Soberan i profesionalan portret koji naglašava kredibilitet, mirnu sigurnost i liderski autoritet.",
    thumbnailPath: "/authority-headshot.png?v=2",
    thumbnailAlt: "Primer authority headshot stila",
    prompt:
      "Create a sober and authoritative portrait of the person from the uploaded character reference photo. KEEP THE FACIAL FEATURES THE SAME AS IN THE ORIGINAL. The subject is seated or standing, still, with a perfectly balanced body, relaxed shoulders, and a straight back. The hands are visible and composed, either resting together or relaxed in the lap. Head is slightly tilted forward, eyes steady, and the expression is slightly serious but human. Attire: navy suit, baby blue shirt, minimalist style. Background: vast, minimalist space or a soft gradient that suggests scale and responsibility. Lighting: soft, naturalistic, overcast light, no drama, no glare. Camera: Nikon Z8, 85mm, Deep Tone Control. Mood: confidence, leadership, credibility, quiet power. Negative prompt: no fashion exaggeration, no theatrical lighting, no commanding smile, no facial alteration, no noise, no text.",
    category: "profesionalna-profilna-slika",
  },
  {
    slug: "business-headshot",
    label: "Business Headshot",
    description:
      "Ultra-realističan poslovni portret u modernom kancelarijskom okruženju sa profesionalnim, samouverenim izrazom.",
    thumbnailPath: "/business-headshot.png?v=2",
    thumbnailAlt: "Primer business headshot stila",
    prompt:
      "Create an ultra-realistic, formal business portrait of the person in the uploaded character reference photo. KEEP THE FACIAL FEATURES THE SAME AS IN THE ORIGINAL. The subject is seated in a modern executive chair, leaning back slightly with a relaxed back and shoulders down. One arm rests naturally on the armrest, the other hand casually placed on the thigh. They are wearing a tailored navy suit and a light blue shirt. The facial expression shows a subtle, confident, calm, and serene smile. Background: clean, modern office, out of focus. Lighting: soft studio light with subtle highlights. Camera: Phase One IQ80, 40mm. Negative prompt: no slouching, no casual posing, no face alteration, no filters, no text, no logos.",
    category: "profesionalna-profilna-slika",
  },
  {
    slug: "cinematic-casual-portrait",
    label: "Cinematic Casual",
    description:
      "Moderan casual portret sa mekim cinematic osvetljenjem i opuštenom atmosferom.",
    thumbnailPath: "/cinematic-casual-portrait.png",
    thumbnailAlt: "Primer cinematic casual portrait stila",
    prompt:
      "Create a casual cinematic portrait of the person in the uploaded reference image. Preserve the exact facial features, identity, hairstyle, and natural proportions from the original photo. Use soft cinematic lighting, realistic natural tones, subtle depth of field, and a relaxed modern atmosphere inspired by lifestyle photography. The subject should appear confident, approachable, and naturally styled with balanced contrast and gentle shadows. Maintain ultra-realistic skin texture, clean lighting transitions, and authentic environmental blending.",
    category: "portret",
  },
  {
    slug: "editorial-fashion-portrait",
    label: "Editorial Fashion",
    description:
      "Luksuzni editorial portret inspirisan modnim magazinima i premium fotografijom.",
    thumbnailPath: "/editorial-fashion-portrait.png",
    thumbnailAlt: "Primer editorial fashion portrait stila",
    prompt:
      "Create a high-end editorial fashion portrait of the person in the uploaded reference image. Preserve the exact facial features, identity, hairstyle, and natural proportions from the original photo. The subject wears elegant modern fashion styling with refined textures and subtle luxury details. Use cinematic studio lighting, soft shadows, and a premium magazine aesthetic inspired by Vogue and GQ photography. The composition should feel sophisticated, timeless, and visually striking with realistic skin texture and professional color grading.",
    category: "portret",
  },
  {
    slug: "golden-hour-portrait",
    label: "Golden Hour",
    description: "Topli cinematic portret sa prirodnim sunset osvetljenjem.",
    thumbnailPath: "/golden-hour-portrait.png",
    thumbnailAlt: "Primer golden hour portrait stila",
    prompt:
      "Create a cinematic golden hour portrait of the person in the uploaded reference image. Preserve the exact facial features, identity, hairstyle, and body proportions from the original photo. Use warm sunset lighting, soft highlights, realistic skin tones, and natural outdoor depth. The atmosphere should feel calm, emotional, and cinematic with subtle lens blur and premium photography aesthetics. Keep the image ultra-realistic with balanced contrast and smooth natural lighting transitions.",
    category: "portret",
  },
  {
    slug: "dark-luxury-portrait",
    label: "Dark Luxury",
    description:
      "Tamni luksuzni portret sa dramaticnim osvetljenjem i premium estetikom.",
    thumbnailPath: "/dark-luxury-portrait.png",
    thumbnailAlt: "Primer dark luxury portrait stila",
    prompt:
      "Create a dark luxury portrait of the person in the uploaded reference image. Preserve the exact facial features, identity, hairstyle, and natural proportions from the original photo. Use a deep black background, elegant shadows, sharp facial lighting, and subtle cinematic contrast. The subject should appear confident and sophisticated with realistic skin detail, premium styling, and luxury fashion photography aesthetics. Emphasize clean composition, dramatic mood, and ultra-realistic lighting.",
    category: "portret",
  },
  {
    slug: "street-style-portrait",
    label: "Street Style",
    description: "Moderan urbani portret sa fashion streetwear atmosferom.",
    thumbnailPath: "/street-style-portrait.png",
    thumbnailAlt: "Primer street style portrait stila",
    prompt:
      "Create a modern street-style portrait of the person in the uploaded reference image. Preserve the exact facial features, identity, hairstyle, and natural proportions from the original photo. Use an urban city environment with cinematic lighting, realistic street textures, and modern fashion photography aesthetics. The atmosphere should feel stylish, youthful, and authentic with soft depth of field, natural lighting, and subtle cinematic tones. Keep the portrait ultra-realistic and visually dynamic.",
    category: "portret",
  },
  {
    slug: "soft-beauty-portrait",
    label: "Soft Beauty",
    description: "Mekan elegantan beauty portret sa clean premium izgledom.",
    thumbnailPath: "/soft-beauty-portrait.png",
    thumbnailAlt: "Primer soft beauty portrait stila",
    prompt:
      "Create a soft beauty portrait of the person in the uploaded reference image. Preserve the exact facial features, identity, hairstyle, and natural proportions from the original photo. Use soft diffused lighting, subtle highlights, clean skin texture, and a calm elegant atmosphere. The portrait should feel modern, minimal, and premium with natural skin tones, smooth lighting transitions, and realistic detail. Emphasize gentle depth of field and refined beauty photography aesthetics.",
    category: "portret",
  },
];

export function getStylePreset(slug: string) {
  return stylePresets.find((preset) => preset.slug === slug);
}

export function getStylePresetsByCategory(category: string) {
  return stylePresets.filter((preset) => preset.category === category);
}
