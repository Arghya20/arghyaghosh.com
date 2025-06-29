import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cache control headers
  response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  
  return response;
}