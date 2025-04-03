import { getAllData } from '@/server/edd';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await getAllData();
    if (response)
      return NextResponse.json({ datazero: response});
    else
      return NextResponse.json({ error: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}