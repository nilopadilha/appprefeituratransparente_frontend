/**
 * IBGE SIDRA API Service
 * 
 * Provides methods to fetch socio-economic data from IBGE SIDRA.
 * Using Agregados API (v3) for better flexibility.
 */

export interface IbgeData {
  population: string;
  gdpPerCapita: string;
  cityName: string;
  year: string;
}

export const fetchCityData = async (ibgeCode: string): Promise<IbgeData> => {
  try {
    // 1. Fetch Population (Censo 2022 - Table 9514)
    // Variables/Classifications for Total: v=93 (Pop), c2=6794 (Total Sex), c287=100362 (Total Age), c286=113635 (Total Form)
    const popUrl = `https://apisidra.ibge.gov.br/values/t/9514/p/2022/v/93/n6/${ibgeCode}/c2/6794/c287/100362/c286/113635`;
    
    // 2. Fetch GDP (Table 5938)
    // Variable 37: Produto Interno Bruto a preços correntes (Total)
    const gdpUrl = `https://apisidra.ibge.gov.br/values/t/5938/p/last%201/v/37/n6/${ibgeCode}`;

    console.log(`Fetching IBGE data for: ${ibgeCode}`);

    const [popRes, gdpRes] = await Promise.all([
      fetch(popUrl),
      fetch(gdpUrl)
    ]);

    if (!popRes.ok || !gdpRes.ok) {
      throw new Error(`IBGE API returned status: Pop:${popRes.status} GDP:${gdpRes.status}`);
    }

    const popJson = await popRes.json();
    const gdpJson = await gdpRes.json();

    // Data parsing logic
    let population = "N/A";
    let cityName = "Cidade desconhecida";
    
    if (Array.isArray(popJson) && popJson.length > 1) {
      // SIDRA returns header in first element, value in second
      population = popJson[1].V;
      cityName = popJson[1].D3N.split(" (")[0]; // "Natal (RN)" -> "Natal"
    }

    let gdpTotal = "N/A";
    if (Array.isArray(gdpJson) && gdpJson.length > 1) {
      gdpTotal = gdpJson[1].V;
    }

    let gdpPerCapitaValue = "N/A";
    if (gdpTotal !== "N/A" && population !== "N/A" && Number(population) > 0) {
      // Total GDP is in Mil Reais, so we multiply by 1000
      const calculatedGdp = (Number(gdpTotal) * 1000) / Number(population);
      gdpPerCapitaValue = calculatedGdp.toFixed(2);
    }

    return {
      population,
      gdpPerCapita: gdpPerCapitaValue,
      cityName,
      year: "2022/2021"
    };
  } catch (error) {
    console.error("Detailed error in ibgeService:", error);
    throw error;
  }
};
