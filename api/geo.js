// Vercel Edge Function to detect visitor's country
export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Get country code from Vercel's geolocation
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'US';

  // List of countries subject to GDPR/privacy laws
  const gdprCountries = [
    // EU countries
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
    // EEA countries
    'GB', 'CH', 'NO', 'IS', 'LI'
  ];

  const requiresConsent = gdprCountries.includes(country);

  return new Response(
    JSON.stringify({
      country,
      requiresConsent
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    }
  );
}
