import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the path to the ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const videoFile = 'video.mp4';
const inputPath = path.resolve(__dirname, `../public/${videoFile}`);
const outputDir = path.resolve(__dirname, '../public/frames');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting frame extraction for ${videoFile}...`);
console.log(`Outputting to: ${outputDir}`);

// We extract at 24 frames per second (or whatever fits) and scale to 1280x720 to save size.
// For a scrollytelling experience, usually 10-15 fps is enough, let's extract at 15 fps.
// Webp compression provides great quality/size ratio.
ffmpeg(inputPath)
  .outputOptions([
    '-vf', 'scale=-1:1080,fps=15', // Extract at 1080p for crispness
    '-c:v', 'libwebp',
    '-quality', '90', // Higher webp quality
    '-compression_level', '6'
  ])
  .output(path.join(outputDir, 'frame-%04d.webp'))
  .on('end', () => {
    console.log('Frame extraction complete!');
    console.log('You can now use the frames in ScrollVideoScrubber.');
  })
  .on('error', (err) => {
    console.error('Error extracting frames:', err);
  })
  .run();
