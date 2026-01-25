import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { GiLaurelsTrophy } from 'react-icons/gi';
import { LuTarget } from 'react-icons/lu';

// Mock API data - in production, this would come from an actual API
// const mockData = [
//   // Advanced League
//   {
//     id: 1,
//     left_putt_10ft: 2,
//     left_putt_20ft: 0,
//     left_putt_30ft: 0,
//     left_putt_40ft: 0,
//     center_putt_10ft: 0,
//     center_putt_20ft: 0,
//     center_putt_30ft: 0,
//     center_putt_40ft: 0,
//     right_putt_10ft: 0,
//     right_putt_20ft: 0,
//     right_putt_30ft: 0,
//     right_putt_40ft: 0,
//     total_score: 2,
//     created_at: 1769316136,
//     league: 'adv',
//     email: 'jon.reckner@gmail.com',
//     name: 'Jon Reckner',
//   },
//   {
//     id: 2,
//     left_putt_10ft: 4,
//     left_putt_20ft: 3,
//     left_putt_30ft: 2,
//     left_putt_40ft: 1,
//     center_putt_10ft: 4,
//     center_putt_20ft: 3,
//     center_putt_30ft: 1,
//     center_putt_40ft: 1,
//     right_putt_10ft: 3,
//     right_putt_20ft: 3,
//     right_putt_30ft: 2,
//     right_putt_40ft: 1,
//     total_score: 58,
//     created_at: 1769316136,
//     league: 'adv',
//     email: 'sarah.thompson@gmail.com',
//     name: 'Sarah Thompson',
//   },
//   {
//     id: 3,
//     left_putt_10ft: 3,
//     left_putt_20ft: 2,
//     left_putt_30ft: 1,
//     left_putt_40ft: 1,
//     center_putt_10ft: 3,
//     center_putt_20ft: 3,
//     center_putt_30ft: 2,
//     center_putt_40ft: 0,
//     right_putt_10ft: 4,
//     right_putt_20ft: 2,
//     right_putt_30ft: 1,
//     right_putt_40ft: 1,
//     total_score: 52,
//     created_at: 1769316136,
//     league: 'adv',
//     email: 'mike.anderson@gmail.com',
//     name: 'Mike Anderson',
//   },
//   {
//     id: 4,
//     left_putt_10ft: 4,
//     left_putt_20ft: 3,
//     left_putt_30ft: 1,
//     left_putt_40ft: 0,
//     center_putt_10ft: 4,
//     center_putt_20ft: 2,
//     center_putt_30ft: 1,
//     center_putt_40ft: 1,
//     right_putt_10ft: 3,
//     right_putt_20ft: 3,
//     right_putt_30ft: 2,
//     right_putt_40ft: 0,
//     total_score: 48,
//     created_at: 1769316136,
//     league: 'adv',
//     email: 'emma.davis@gmail.com',
//     name: 'Emma Davis',
//   },
//
//   // Open League
//   {
//     id: 5,
//     left_putt_10ft: 3,
//     left_putt_20ft: 2,
//     left_putt_30ft: 1,
//     left_putt_40ft: 0,
//     center_putt_10ft: 3,
//     center_putt_20ft: 2,
//     center_putt_30ft: 1,
//     center_putt_40ft: 1,
//     right_putt_10ft: 2,
//     right_putt_20ft: 2,
//     right_putt_30ft: 1,
//     right_putt_40ft: 0,
//     total_score: 42,
//     created_at: 1769316136,
//     league: 'open',
//     email: 'alex.martinez@gmail.com',
//     name: 'Alex Martinez',
//   },
//   {
//     id: 6,
//     left_putt_10ft: 2,
//     left_putt_20ft: 1,
//     left_putt_30ft: 1,
//     left_putt_40ft: 0,
//     center_putt_10ft: 2,
//     center_putt_20ft: 2,
//     center_putt_30ft: 0,
//     center_putt_40ft: 0,
//     right_putt_10ft: 3,
//     right_putt_20ft: 1,
//     right_putt_30ft: 1,
//     right_putt_40ft: 1,
//     total_score: 36,
//     created_at: 1769316136,
//     league: 'open',
//     email: 'lisa.wilson@gmail.com',
//     name: 'Lisa Wilson',
//   },
//   {
//     id: 7,
//     left_putt_10ft: 4,
//     left_putt_20ft: 2,
//     left_putt_30ft: 1,
//     left_putt_40ft: 1,
//     center_putt_10ft: 3,
//     center_putt_20ft: 3,
//     center_putt_30ft: 1,
//     center_putt_40ft: 0,
//     right_putt_10ft: 3,
//     right_putt_20ft: 2,
//     right_putt_30ft: 1,
//     right_putt_40ft: 1,
//     total_score: 50,
//     created_at: 1769316136,
//     league: 'open',
//     email: 'david.brown@gmail.com',
//     name: 'David Brown',
//   },
//   {
//     id: 8,
//     left_putt_10ft: 3,
//     left_putt_20ft: 2,
//     left_putt_30ft: 0,
//     left_putt_40ft: 0,
//     center_putt_10ft: 3,
//     center_putt_20ft: 1,
//     center_putt_30ft: 1,
//     center_putt_40ft: 0,
//     right_putt_10ft: 2,
//     right_putt_20ft: 2,
//     right_putt_30ft: 0,
//     right_putt_40ft: 1,
//     total_score: 38,
//     created_at: 1769316136,
//     league: 'open',
//     email: 'rachel.taylor@gmail.com',
//     name: 'Rachel Taylor',
//   },
//
//   // Junior League
//   {
//     id: 9,
//     left_putt_10ft: 2,
//     left_putt_20ft: 1,
//     left_putt_30ft: 0,
//     left_putt_40ft: 0,
//     center_putt_10ft: 2,
//     center_putt_20ft: 1,
//     center_putt_30ft: 0,
//     center_putt_40ft: 0,
//     right_putt_10ft: 2,
//     right_putt_20ft: 1,
//     right_putt_30ft: 1,
//     right_putt_40ft: 0,
//     total_score: 28,
//     created_at: 1769316136,
//     league: 'junior',
//     email: 'tyler.johnson@gmail.com',
//     name: 'Tyler Johnson',
//   },
//   {
//     id: 10,
//     left_putt_10ft: 3,
//     left_putt_20ft: 1,
//     left_putt_30ft: 1,
//     left_putt_40ft: 0,
//     center_putt_10ft: 2,
//     center_putt_20ft: 2,
//     center_putt_30ft: 0,
//     center_putt_40ft: 0,
//     right_putt_10ft: 2,
//     right_putt_20ft: 1,
//     right_putt_30ft: 0,
//     right_putt_40ft: 0,
//     total_score: 32,
//     created_at: 1769316136,
//     league: 'junior',
//     email: 'olivia.smith@gmail.com',
//     name: 'Olivia Smith',
//   },
//   {
//     id: 11,
//     left_putt_10ft: 1,
//     left_putt_20ft: 1,
//     left_putt_30ft: 0,
//     left_putt_40ft: 0,
//     center_putt_10ft: 2,
//     center_putt_20ft: 0,
//     center_putt_30ft: 0,
//     center_putt_40ft: 0,
//     right_putt_10ft: 1,
//     right_putt_20ft: 1,
//     right_putt_30ft: 0,
//     right_putt_40ft: 0,
//     total_score: 20,
//     created_at: 1769316136,
//     league: 'junior',
//     email: 'ethan.williams@gmail.com',
//     name: 'Ethan Williams',
//   },
//   {
//     id: 12,
//     left_putt_10ft: 2,
//     left_putt_20ft: 2,
//     left_putt_30ft: 1,
//     left_putt_40ft: 0,
//     center_putt_10ft: 3,
//     center_putt_20ft: 1,
//     center_putt_30ft: 0,
//     center_putt_40ft: 0,
//     right_putt_10ft: 2,
//     right_putt_20ft: 1,
//     right_putt_30ft: 1,
//     right_putt_40ft: 0,
//     total_score: 34,
//     created_at: 1769316136,
//     league: 'junior',
//     email: 'sophia.garcia@gmail.com',
//     name: 'Sophia Garcia',
//   },
// ];

function GolfLeaderboard() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  const { data: mockData, isLoading } = useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      const response = await fetch('https://apis.recknerd.com/dgpl_scores');
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-slate-600'>Loading leaderboard...</div>
      </div>
    );
  }

  // Get anonymous name format
  const getAnonymousName = (fullName) => {
    const parts = fullName.split(' ');
    if (parts.length < 2) {
      return 'Unknown';
    }
    const firstNameAsterisks = '*'.repeat(parts[0].length - 1);
    const lastNameAsterisks = '*'.repeat(parts[1].length - 1);
    return `${parts[0][0]}${firstNameAsterisks} ${parts[1][0]}${lastNameAsterisks}`;
  };

  // Format date from timestamp
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Group data by league and date
  const groupedData = mockData.reduce((acc, player) => {
    const league = player.league || 'General';
    const date = formatDate(player.created_at);

    if (!acc[league]) {
      acc[league] = {};
    }
    if (!acc[league][date]) {
      acc[league][date] = [];
    }

    acc[league][date].push(player);
    return acc;
  }, {});

  // Sort players by score within each group
  Object.keys(groupedData).forEach((league) => {
    Object.keys(groupedData[league]).forEach((date) => {
      groupedData[league][date].sort((a, b) => b.total_score - a.total_score);
    });
  });

  const leagues = Object.keys(groupedData);

  // Set initial active tab if not set
  if (!activeTab && leagues.length > 0) {
    setActiveTab(leagues[0]);
  }

  // Handle tab change and store selection
  const handleTabChange = (league) => {
    setActiveTab(league);
  };

  function WinnersView() {
    const winners = leagues.map((league) => {
      const leagueData = groupedData[league];
      const allPlayers = Object.values(leagueData).flat();
      allPlayers.sort((a, b) => b.total_score - a.total_score);
      return { league, player: allPlayers[0] };
    });

    return (
      <div className='space-y-4'>
        {winners.map(({ league, player }) => (
          <div key={league} className='bg-white rounded-lg shadow-sm border border-slate-200'>
            <div className='bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-3 border-b border-amber-200'>
              <h3 className='font-semibold text-slate-700 flex items-center gap-2'>
                <GiLaurelsTrophy className='w-5 h-5 text-amber-500' />
                {league.charAt(0).toUpperCase() + league.slice(1)} League Champion
              </h3>
            </div>
            <div className='p-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-white font-bold text-lg'>
                    1
                  </div>
                  <span className='font-semibold text-lg text-slate-800'>
                    {getAnonymousName(player.name)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPlayer(player)}
                  className='px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition-colors cursor-pointer ring-2 ring-yellow-400 shadow-lg shadow-amber-300/50'
                >
                  {player.total_score}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function PuttDetails({ player }) {
    return (
      <div className='grid grid-cols-1 gap-4'>
        <div className='bg-slate-50 rounded-lg p-4'>
          <h4 className='font-semibold text-sm text-slate-700 mb-3'>Left Putts</h4>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-between'>
              <span className='text-slate-600'>10ft:</span>
              <span className='font-medium'>{player.left_putt_10ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>20ft:</span>
              <span className='font-medium'>{player.left_putt_20ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>30ft:</span>
              <span className='font-medium'>{player.left_putt_30ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>40ft:</span>
              <span className='font-medium'>{player.left_putt_40ft}</span>
            </div>
          </div>
        </div>

        <div className='bg-slate-50 rounded-lg p-4'>
          <h4 className='font-semibold text-sm text-slate-700 mb-3'>Center Putts</h4>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-between'>
              <span className='text-slate-600'>10ft:</span>
              <span className='font-medium'>{player.center_putt_10ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>20ft:</span>
              <span className='font-medium'>{player.center_putt_20ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>30ft:</span>
              <span className='font-medium'>{player.center_putt_30ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>40ft:</span>
              <span className='font-medium'>{player.center_putt_40ft}</span>
            </div>
          </div>
        </div>

        <div className='bg-slate-50 rounded-lg p-4'>
          <h4 className='font-semibold text-sm text-slate-700 mb-3'>Right Putts</h4>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-between'>
              <span className='text-slate-600'>10ft:</span>
              <span className='font-medium'>{player.right_putt_10ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>20ft:</span>
              <span className='font-medium'>{player.right_putt_20ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>30ft:</span>
              <span className='font-medium'>{player.right_putt_30ft}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-600'>40ft:</span>
              <span className='font-medium'>{player.right_putt_40ft}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function LeagueStandings({ league }) {
    return (
      <div className='space-y-6'>
        {Object.entries(groupedData[league]).map(([date, players]) => (
          <div key={date} className='bg-white rounded-lg shadow-sm border border-slate-200'>
            <div className='bg-slate-100 px-4 py-2 border-b border-slate-200'>
              <h3 className='font-semibold text-slate-700'>{date}</h3>
            </div>
            <div className='divide-y divide-slate-200'>
              {players.map((player, index) => (
                <div
                  key={player.email}
                  className={`flex items-center justify-between px-4 py-3 transition-colors ${
                    index === 0
                      ? 'bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 border-l-4 border-amber-400'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm ${
                        index === 0 ? 'bg-amber-400 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index === 0 && <GiLaurelsTrophy className='w-5 h-5 text-amber-500' />}
                    <span className='font-medium text-slate-800'>
                      {getAnonymousName(player.name)}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPlayer(player)}
                    className={`px-4 py-2 text-white rounded-lg font-semibold transition-colors cursor-pointer ${
                      index === 0
                        ? 'bg-amber-500 hover:bg-amber-600 ring-2 ring-yellow-400 shadow-lg shadow-amber-300/50'
                        : 'hover:opacity-90'
                    }`}
                    style={index !== 0 ? { backgroundColor: '#732FDF' } : {}}
                  >
                    {player.total_score}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-6'>
          <div className='flex items-center gap-3 mb-2'>
            <LuTarget className='w-8 h-8 text-emerald-600' />
            <h1 className='text-3xl font-bold text-slate-800'>Putting Leaderboard</h1>
          </div>
        </div>

        {/* Mobile: Tabs */}
        <div className='md:hidden mb-6'>
          <div className='flex gap-2 overflow-x-auto pb-2'>
            <button
              onClick={() => handleTabChange('winners')}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'winners'
                  ? 'text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              style={activeTab === 'winners' ? { backgroundColor: '#732FDF' } : {}}
            >
              Winners
            </button>
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => handleTabChange(league)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === league ? 'text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
                style={activeTab === league ? { backgroundColor: '#732FDF' } : {}}
              >
                {league}
              </button>
            ))}
          </div>
          {activeTab === 'winners' ? (
            <WinnersView />
          ) : (
            activeTab && <LeagueStandings league={activeTab} />
          )}
        </div>

        {/* Desktop: All leagues */}
        <div className='hidden md:grid md:grid-cols-2 gap-6'>
          {leagues.map((league) => (
            <div key={league}>
              <h2 className='text-xl font-bold text-slate-800 mb-4'>{league}</h2>
              <LeagueStandings league={league} />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPlayer && (
          <div
            className='fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center p-4 z-50'
            onClick={() => setSelectedPlayer(null)}
          >
            <div
              className='bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='sticky top-0 bg-white border-b border-slate-200 px-6 py-4'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-bold text-slate-800'>
                    {getAnonymousName(selectedPlayer.name)}
                  </h2>
                  <button
                    onClick={() => setSelectedPlayer(null)}
                    className='text-slate-400 hover:text-slate-600 text-2xl leading-none'
                  >
                    ×
                  </button>
                </div>
                <p className='text-sm text-slate-500 mt-1'>
                  {formatDate(selectedPlayer.created_at)}
                </p>
                <div className='mt-3 flex items-center gap-2'>
                  <span className='text-2xl font-bold text-emerald-600'>
                    {selectedPlayer.total_score}
                  </span>
                  <span className='text-slate-600'>points</span>
                </div>
              </div>
              <div className='p-6'>
                <PuttDetails player={selectedPlayer} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GolfLeaderboard;
