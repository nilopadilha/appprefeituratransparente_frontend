import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get('q')?.toLowerCase();

  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');
    const cities = await response.json();

    let filteredCities = cities;
    if (q) {
      filteredCities = cities.filter((city: any) => {
        const cityName = city.nome?.toLowerCase() || '';
        const ufSigla = city.microrregiao?.mesorregiao?.UF?.sigla?.toLowerCase() || '';
        const combined = `${cityName}-${ufSigla}`;
        
        return cityName.includes(q) || 
               ufSigla === q || 
               combined.includes(q.replace(' ', ''));
      });
    }

    // Return only essential data to keep response small
    const result = filteredCities.slice(0, 20).map((city: any) => ({
      id: city.id.toString(),
      name: city.nome,
      uf: city.microrregiao.mesorregiao.UF.sigla
    }));

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400', // 1 week cache
      },
    });
  } catch (error) {
    console.error("Error fetching cities from IBGE:", error);
    return NextResponse.json({ error: 'Failed to fetch cities' }, { status: 500 });
  }
}
