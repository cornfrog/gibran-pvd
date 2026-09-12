/**
 * Dynamic Media Content Catalog for Images and Videos Carousel
 * 
 * Dynamically scans files in public/content/images/ and public/content/videos/
 * using Vite's import.meta.glob. Zero hardcoding!
 * 
 * - When you add a file to public/content/images/ or public/content/videos/, it automatically appears.
 * - When you delete a file, it is automatically removed.
 */

// Helper to format friendly titles and metadata
function formatMetaFromFilename(filename, type) {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');

  const knownOverrides = {
    'live-deck-sunset': {
      title: 'Waterfront Sunset Deck Sessions',
      caption: 'Sunset open-format deck performance on the Providence waterfront overlooking the river.',
      category: 'Waterfront Sunset',
      location: 'The Hot Club • Providence, RI',
      date: 'Summer 2026',
    },
    'tour-stage-hype': {
      title: 'Arena Tour Stage MC & Direct Support',
      caption: 'Commanding arena crowds with live vocal presence and stage control on national tour stops.',
      category: 'Arena Tour MC',
      location: 'National Amphitheater Circuit',
      date: 'Tour Season',
    },
    'newport-waterfront-party': {
      title: 'Newport Harbor Sunset Day Party',
      caption: 'High-energy coastal celebration alongside harbor yachts and historic Newport waterfront decks.',
      category: 'Newport Circuit',
      location: 'Newport Marina • Newport, RI',
      date: 'Summer Series',
    },
    'club-party-night': {
      title: 'Cafecito & Latin House Nightlife',
      caption: 'Peak-hour turntable energy, Dembow drops, and late-night Latin house movement.',
      category: 'Nightclub Residency',
      location: 'Cafe Ava • Providence, RI',
      date: 'Residency Night',
    },
  };

  if (knownOverrides[nameWithoutExt]) {
    return knownOverrides[nameWithoutExt];
  }

  // Format generic filename: e.g. "my_video_reel_1080p.mp4" -> "My Video Reel 1080p"
  const readable = nameWithoutExt
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

  return {
    title: readable || (type === 'video' ? 'Live Video Reel' : 'Live Event Capture'),
    caption: type === 'video' ? 'Live video footage from the performance circuit.' : 'Live event photo capture.',
    category: type === 'video' ? 'Live Video' : 'Live Photo',
    location: 'Live Performance',
    date: 'Recent',
  };
}

// Dynamically discover all images and videos from public/content
function loadDynamicMedia() {
  const imageModules = import.meta.glob(
    [
      '/public/content/images/*.{jpg,jpeg,png,webp,gif,svg,JPG,JPEG,PNG,WEBP}',
      '../../public/content/images/*.{jpg,jpeg,png,webp,gif,svg,JPG,JPEG,PNG,WEBP}',
    ],
    { eager: true }
  );

  const videoModules = import.meta.glob(
    [
      '/public/content/videos/*.{mp4,webm,mov,ogg,m4v,MP4,WEBM,MOV}',
      '../../public/content/videos/*.{mp4,webm,mov,ogg,m4v,MP4,WEBM,MOV}',
    ],
    { eager: true }
  );

  // Deduplicate by filename
  const seenImages = new Set();
  const images = [];
  for (const rawPath of Object.keys(imageModules)) {
    const filename = rawPath.split('/').pop();
    if (!filename || seenImages.has(filename)) continue;
    seenImages.add(filename);

    const meta = formatMetaFromFilename(filename, 'image');
    images.push({
      id: `img-${filename}`,
      type: 'image',
      title: meta.title,
      caption: meta.caption,
      src: `/content/images/${filename}`,
      category: meta.category,
      location: meta.location,
      date: meta.date,
    });
  }

  const seenVideos = new Set();
  const videos = [];
  for (const rawPath of Object.keys(videoModules)) {
    const filename = rawPath.split('/').pop();
    if (!filename || seenVideos.has(filename)) continue;
    seenVideos.add(filename);

    const meta = formatMetaFromFilename(filename, 'video');
    videos.push({
      id: `vid-${filename}`,
      type: 'video',
      title: meta.title,
      caption: meta.caption,
      src: `/content/videos/${filename}`,
      category: meta.category,
      location: meta.location,
      date: meta.date,
    });
  }

  // Videos first if any exist, followed by images
  return [...videos, ...images];
}

export const MEDIA_ITEMS = loadDynamicMedia();
