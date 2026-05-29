import { NextRequest, NextResponse } from 'next/server';
import atriconData from '@/data/atricon_mock.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ibgeCode: string }> }
) {
  const { ibgeCode } = await params;

  if (!ibgeCode) {
    return NextResponse.json({ error: 'IBGE code is required' }, { status: 400 });
  }

  // Find city in mock data
  const cityInfo = atriconData.find(item => item.ibgeCode === ibgeCode);

  if (!cityInfo) {
    return NextResponse.json({ 
      error: 'City not found in transparency database',
      message: 'Dados do Radar da Transparência ainda não disponíveis para esta localidade.'
    }, { status: 404 });
  }

  return NextResponse.json(cityInfo);
}
