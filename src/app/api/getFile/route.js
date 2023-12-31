import { readFileSync } from 'fs';
import path from 'path';

export async function GET(request) {

  const { searchParams } = new URL(request.url)
  const fileName = searchParams.get('fileName');
    const file = path.join(process.cwd(), 'files', fileName);
  const stringified = readFileSync(file);
  return new Response(stringified, {
    status: 200,
    headers: { 'Content-Type': 'audio/opus',
    'Content-disposition': 'attachment; filename=' + fileName
  },
  })

}