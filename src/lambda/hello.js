import fs from 'fs'
import path from 'path'

// modern JS style - encouraged
export async function handler(event, context) {
  const file = fs.readFileSync(path.join(__dirname, 'asset.txt'), 'utf-8')
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world ${Math.floor(Math.random() * 10)}. ${file}`,
    }),
  }
}
