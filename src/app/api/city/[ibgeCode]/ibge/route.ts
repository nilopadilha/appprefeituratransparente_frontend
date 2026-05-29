import { NextRequest, NextResponse } from 'next/server';
import { fetchCityData } from '@/services/ibgeService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ibgeCode: string }> }
) {
  const { ibgeCode } = await params;

  if (!ibgeCode) {
    return NextResponse.json({ error: 'IBGE code is required' }, { status: 400 });
  }

  try {
    const data = await fetchCityData(ibgeCode);
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200', // 24h cache
      },
    });
  } catch (error) {
    console.error(`API Error for city ${ibgeCode}:`, error);
    return NextResponse.json({ error: 'Failed to fetch city data' }, { status: 500 });
  }
}
