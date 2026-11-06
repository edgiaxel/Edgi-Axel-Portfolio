import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const candidatePaths = [
    path.join(process.cwd(), "src/app/Profile.jpeg"),
    path.join(process.cwd(), "public/Profile.jpeg"),
    path.join(process.cwd(), "public/profile.jpeg"),
    path.join(process.cwd(), "src/app/Profile.jpg"),
    path.join(process.cwd(), "public/Profile.jpg"),
  ];

  for (const filePath of candidatePaths) {
    try {
      if (fs.existsSync(/*turbopackIgnore: true*/ filePath)) {
        const stat = fs.statSync(/*turbopackIgnore: true*/ filePath);
        if (stat.isFile()) {
          const fileBuffer = fs.readFileSync(/*turbopackIgnore: true*/ filePath);
          return new NextResponse(fileBuffer, {
            headers: {
              "Content-Type": "image/jpeg",
              "Cache-Control": "public, max-age=3600",
            },
          });
        }
      }
    } catch {
      // Continue to next path
    }
  }

  return new NextResponse(null, { status: 404 });
}
