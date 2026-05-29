import { NextRequest, NextResponse } from 'next/server';
import socialMockData from '@/data/social_programs_mock.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ibgeCode: string }> }
) {
  const { ibgeCode } = await params;

  if (!ibgeCode) {
    return NextResponse.json({ error: 'IBGE code is required' }, { status: 400 });
  }

  // 1. Fetch Impact Data from IBGE (Tabela 10300 - Censo 2022)
  // Variable 12695: Participação percentual de programas sociais no rendimento domiciliar
  const impactUrl = `https://apisidra.ibge.gov.br/values/t/10300/p/2022/v/12695/n6/${ibgeCode}`;

  try {
    const impactRes = await fetch(impactUrl);
    
    let impactPercentage = "N/A";
    
    if (impactRes.ok) {
      const contentType = impactRes.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const impactJson = await impactRes.json();
        if (Array.isArray(impactJson) && impactJson.length > 1) {
          impactPercentage = impactJson[1].V + "%";
        }
      } else {
        const textError = await impactRes.text();
        console.warn(`SIDRA Social API returned text instead of JSON for ${ibgeCode}:`, textError);
      }
    }

    // 2. Complement with detailed mock data if available
    const citySocialInfo = socialMockData.find(item => item.ibgeCode === ibgeCode);

    const result = {
      ibgeCode,
      impact: citySocialInfo?.impact || impactPercentage,
      programs: citySocialInfo?.programs || [
        { "name": "Bolsa Família", "beneficiaries": "Consulte o gestor local", "value": "Aguardando integração", "status": "Ativo" }
      ],
      source: "MDS / IBGE SIDRA 2022"
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching social data:", error);
    return NextResponse.json({ error: 'Failed to fetch social data' }, { status: 500 });
  }
}
