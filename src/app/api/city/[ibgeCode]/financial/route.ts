import { NextRequest, NextResponse } from 'next/server';
import financialMock from '@/data/financial_transfers_mock.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ibgeCode: string }> }
) {
  const { ibgeCode } = await params;

  if (!ibgeCode) {
    return NextResponse.json({ error: 'IBGE code is required' }, { status: 400 });
  }

  // 1. Logic for RN Cities
  // RN municipalities start with "24"
  const isRNCity = ibgeCode.startsWith("24");

  if (!isRNCity) {
    return NextResponse.json({ 
      message: "Consulta financeira disponível apenas para municípios do Rio Grande do Norte neste protótipo.",
      available: false
    });
  }

  // 2. Search in Mock
  const cityFinancial = financialMock.find(item => item.ibgeCode === ibgeCode);

  if (cityFinancial) {
    return NextResponse.json({ ...cityFinancial, available: true });
  }

  // 3. Fallback for other RN cities (Dynamic Estimation)
  // In a real app, this would call TCE-RN or Tesouro Transparente
  return NextResponse.json({
    ibgeCode,
    name: "Município do RN",
    fpm: "Consulte o Portal do Tesouro",
    state: "Consulte o Portal do RN",
    federal: "Consulte o Portal da Transparência",
    period: "Ciclo 2026",
    available: true,
    isFallback: true
  });
}
