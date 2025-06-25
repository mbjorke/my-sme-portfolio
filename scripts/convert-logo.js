import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/logo.svg');
const outputPath = path.join(__dirname, '../public/logo.png');

async function convertSvgToPng() {
  try {
    await sharp(inputPath).png().toFile(outputPath);
    console.log(`✅ Successfully converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error('❌ Error converting SVG to PNG:', error);
    process.exit(1);
  }
}

convertSvgToPng();
