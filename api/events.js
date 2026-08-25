export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const events = {
      brooklyn: [
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
      ],
      santafe: [
        {
          id: 101,
          date: new Date(2026, 8, 8).toISOString(),
          title: 'Santa Fe Opera - Opening Night',
          venue: 'The Santa Fe Opera',
          address: '301 Opera Dr, Santa Fe',
          time: '8:30 PM',
          price: '$65-150',
          description: 'Puccini\'s Madama Butterfly - Opening of 2026 season',
          distance: '1.8 mi'
        },
        {
          id: 102,
          date: new Date(2026, 8, 15).toISOString(),
          title: 'Meow Wolf Immersive Experience',
          venue: 'Meow Wolf Santa Fe',
          address: '1352 Rufina Cir, Santa Fe',
          time: '10:00 AM',
          price: '$25-35',
          description: 'Interactive art installation - House of Eternal Return',
          distance: '2.1 mi'
        },
        {
          id: 103,
          date: new Date(2026, 8, 20).toISOString(),
          title: 'Live Jazz at Paradiso',
          venue: 'Paradiso',
          address: '903 Early St, Santa Fe',
          time: '7:00 PM',
          price: '$15-25',
          description: 'Soul and jazz performances in eclectic venue',
          distance: '0.8 mi'
        },
        {
          id: 104,
          date: new Date(2026, 9, 2).toISOString(),
          title: 'Chamber Music Festival',
          venue: 'Santa Fe Chamber Music Festival',
          address: '208 Griffin St, Santa Fe',
          time: '7:30 PM',
          price: '$30-60',
          description: 'World-class chamber music performances',
          distance: '0.7 mi'
        },
        {
          id: 105,
          date: new Date(2026, 9, 12).toISOString(),
          title: 'Concert at The Bridge',
          venue: 'The Bridge at Santa Fe Brewing',
          address: '37 Fire Pl, Santa Fe',
          time: '8:00 PM',
          price: '$20-35',
          description: 'Live music with local and touring artists',
          distance: '3.2 mi'
        },
        {
          id: 106,
          date: new Date(2026, 9, 18).toISOString(),
          title: 'Contemporary Dance Performance',
          venue: 'Lensic Performing Arts Center',
          address: '211 W San Francisco St, Santa Fe',
          time: '7:30 PM',
          price: '$35-75',
          description: 'Contemporary dance company performance',
          distance: '0.5 mi'
        },
        {
          id: 107,
          date: new Date(2026, 10, 1).toISOString(),
          title: 'Ghost Records Indie Night',
          venue: 'Ghost',
          address: '2889 Trades West Rd, Santa Fe',
          time: '8:00 PM',
          price: '$10-18',
          description: 'DIY indie and experimental music showcase',
          distance: '1.9 mi'
        },
        {
          id: 108,
          date: new Date(2026, 10, 15).toISOString(),
          title: 'St. Francis Auditorium Concert',
          venue: 'St. Francis Auditorium',
          address: '107 W Palace Ave, Santa Fe',
          time: '7:00 PM',
          price: '$25-45',
          description: 'Acoustic and classical performances in historic space',
          distance: '0.6 mi'
        }
      ]
    };

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
