export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const events = [
      {
        id: 1,
        date: new Date(2026, 8, 5).toISOString(),
        title: 'Jungle - World Tour 2026',
        venue: 'Brooklyn Steel',
        address: '319 Frost St, Brooklyn',
        time: '8:00 PM',
        price: '$35-55',
        description: 'Jungle with RIO KOSTA',
        distance: '1.2 mi'
      },
      {
        id: 2,
        date: new Date(2026, 8, 12).toISOString(),
        title: 'Kaiju Pop-up Festival',
        venue: 'Industry City',
        address: '220 36th St, Brooklyn',
        time: '12:00 PM',
        price: '$15-30',
        description: 'Giant monster movie fan festival with cosplay, vendors, and collectibles',
        distance: '0.06 mi'
      },
      {
        id: 3,
        date: new Date(2026, 8, 18).toISOString(),
        title: 'Comedy Night with Stand-up Masters',
        venue: 'The Bell House',
        address: '149 7th St, Brooklyn',
        time: '9:00 PM',
        price: '$25-40',
        description: 'Evening of stand-up comedy from local and touring comedians',
        distance: '0.55 mi'
      },
      {
        id: 4,
        date: new Date(2026, 8, 24).toISOString(),
        title: 'Phoebe Bridgers - The Lost Tour',
        venue: 'Brooklyn Steel',
        address: '319 Frost St, Brooklyn',
        time: '8:00 PM',
        price: '$60-95',
        description: 'Phoebe Bridgers with Alex G - Multi-night run',
        distance: '1.2 mi'
      },
      {
        id: 5,
        date: new Date(2026, 8, 25).toISOString(),
        title: 'Phoebe Bridgers - The Lost Tour',
        venue: 'Brooklyn Steel',
        address: '319 Frost St, Brooklyn',
        time: '8:00 PM',
        price: '$60-95',
        description: 'Phoebe Bridgers with Alex G - Night 2',
        distance: '1.2 mi'
      },
      {
        id: 6,
        date: new Date(2026, 8, 26).toISOString(),
        title: 'Phoebe Bridgers - The Lost Tour',
        venue: 'Brooklyn Steel',
        address: '319 Frost St, Brooklyn',
        time: '8:00 PM',
        price: '$60-95',
        description: 'Phoebe Bridgers with Alex G - Night 3',
        distance: '1.2 mi'
      },
      {
        id: 7,
        date: new Date(2026, 9, 10).toISOString(),
        title: 'Don Omar - The Last King World Tour',
        venue: 'Barclays Center',
        address: '620 Atlantic Ave, Brooklyn',
        time: '7:30 PM',
        price: '$45-120',
        description: 'Latin reggaeton sensation Don Omar live',
        distance: '2.1 mi'
      },
      {
        id: 8,
        date: new Date(2026, 9, 15).toISOString(),
        title: 'Art Market & Maker Fair',
        venue: 'Industry City',
        address: '220 36th St, Brooklyn',
        time: '10:00 AM',
        price: '$5-10',
        description: 'Local artists, crafts, and handmade goods marketplace',
        distance: '0.06 mi'
      },
      {
        id: 9,
        date: new Date(2026, 10, 7).toISOString(),
        title: 'Fall Jazz Festival',
        venue: 'Lena Horne Bandshell',
        address: '141 Prospect Park W, Brooklyn',
        time: '6:00 PM',
        price: '$20-40',
        description: 'Multi-day jazz festival in Prospect Park',
        distance: '0.41 mi'
      },
      {
        id: 10,
        date: new Date(2026, 10, 21).toISOString(),
        title: 'Afropunk Festival',
        venue: 'Lena Horne Bandshell',
        address: '141 Prospect Park W, Brooklyn',
        time: '12:00 PM',
        price: '$40-85',
        description: 'Festival celebrating Black culture through music, art, and fashion',
        distance: '0.41 mi'
      }
    ];

    res.status(200).json({
      success: true,
      events: events,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
