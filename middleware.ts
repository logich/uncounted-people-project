import { NextResponse, type NextRequest } from 'next/server'

// Auth is handled client-side in DashboardClient.
// This middleware is kept as a placeholder for future use.
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
