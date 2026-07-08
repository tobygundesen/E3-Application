import React, { useState } from 'react';

export default function E3Connect() {
  const [screen, setScreen] = useState('home');
  const [mentorIndex, setMentorIndex] = useState(0);

  const mentors = [
    {
      id: 1,
      name: 'Joe Blogs',
      title: 'Head of Supply Chain',
      location: 'Auckland',
      match: 94,
      rating: 4.8,
      sessions: 444,
      coached: 28,
      points: 5787,
      availability: 'Available This Week',
      skills: ['Supply Chain', 'IBP', 'Leadership'],
      image: 'https://picsum.photos/400/600',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'Commercial Director',
      location: 'Sydney',
      match: 91,
      rating: 4.9,
      sessions: 120,
      coached: 34,
      points: 1850,
      availability: 'Available Next Week',
      skills: ['Commercial', 'Negotiation', 'P&L'],
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Michael Thompson',
      title: 'Operations VP',
      location: 'Melbourne',
      match: 89,
      rating: 4.7,
      sessions: 78,
      coached: 42,
      points: 1560,
      availability: 'Available Wednesday',
      skills: ['Operations', 'Leadership', 'Manufacturing'],
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const mentor = mentors[mentorIndex];

  return (
    <div className="h-screen bg-[#001B5E] flex items-center justify-center p-4">
      <div className="w-[390px] h-[95vh] max-h-[900px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="relative h-full bg-[#F7F9FC] rounded-[2.5rem] overflow-hidden">
          {screen === 'home' && <HomeScreen setScreen={setScreen} />}
          {screen === 'discover' && (
            <DiscoverScreen
              mentor={mentor}
              mentorIndex={mentorIndex}
              setMentorIndex={setMentorIndex}
              mentors={mentors}
              setScreen={setScreen}
            />
          )}
          {screen === 'profile' && <ProfileScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'goal' && <GoalScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'match' && <MatchScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'mentors' && <MyMentorsScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'messages' && <MessagesScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'leaderboard' && <LeaderboardScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'status' && <StatusScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'schedule' && <ScheduleScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'plan' && <DevelopmentPlanScreen mentor={mentor} setScreen={setScreen} />}
          {screen === 'progress' && <ProgressDashboardScreen mentor={mentor} setScreen={setScreen} />}
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ setScreen }) {
  return (
    <div className="h-full">
      <div className="bg-[#001B5E] text-white p-5 pt-10 pb-5">
        <div className="text-sm opacity-80">Welcome to</div>
        <h1 className="text-4xl font-black">E3 Connect</h1>
        <p className="mt-3 text-white/80">Connect. Coach. Grow.</p>
      </div>

      <div className="p-5 pb-20">
        <button
          onClick={() => setScreen('discover')}
          className="w-full rounded-3xl bg-[#001B5E] text-white py-6 font-black text-lg"
        >
          Discover Mentors
        </button>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <DashboardCard title="Active Mentors" value="642" />
          <DashboardCard title="Sessions" value="8,420" />
          <DashboardCard title="Avg Rating" value="4.8★" />
          <DashboardCard title="Match Success" value="91%" />
        </div>
      </div>

      <BottomNav activeScreen="home" setScreen={setScreen} />
    </div>
  );
}

function DiscoverScreen({ mentor, mentorIndex, setMentorIndex, mentors, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Discover Mentors" onBack={() => setScreen('home')} />
      <div className="p-5">
        <input placeholder="Search mentors..." className="w-full rounded-2xl p-3 mb-4 border border-slate-200" />
        <div className="flex gap-2 flex-wrap mb-4">
          {['Supply Chain', 'Leadership', 'Commercial', 'Finance'].map((skill) => (
            <button key={skill} className="bg-white rounded-full px-3 py-2 text-xs shadow">
              {skill}
            </button>
          ))}
        </div>

        <div className="relative h-[320px] rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center text-6xl">👤</div>
              <div className="mt-4 text-slate-500 text-sm">Mentor Photo</div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

          <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 z-10">
            <div className="text-green-600 text-xl font-black">{mentor.match}%</div>
            <div className="text-xs">Match</div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h2 className="text-3xl font-black">{mentor.name}</h2>
            <p className="text-sm">{mentor.title}</p>
            <p className="text-xs mt-1">📍 {mentor.location}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {mentor.skills.map((skill) => (
                <span key={skill} className="bg-white/20 rounded-lg px-3 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
            <div className="bg-white/90 rounded-2xl p-3 mt-4 text-[#001B5E]">
              <div className="font-black">🤖 AI Match Explanation</div>
              <ul className="text-xs mt-2 space-y-1">
                <li>✓ Similar Supply Chain background</li>
                <li>✓ Experience in {mentor.skills[0]}</li>
                <li>✓ Proven coaching experience</li>
                <li>✓ Strong leadership track record</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() =>
              setMentorIndex(mentorIndex === 0 ? mentors.length - 1 : mentorIndex - 1)
            }
            className="bg-white rounded-2xl px-4 py-3 shadow"
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              setMentorIndex(mentorIndex === mentors.length - 1 ? 0 : mentorIndex + 1)
            }
            className="bg-white rounded-2xl px-4 py-3 shadow"
          >
            Next →
          </button>
        </div>

        <div className="flex justify-center gap-8 mt-6">
          <ActionButton color="red">✕</ActionButton>
          <ActionButton color="blue" onClick={() => setScreen('profile')}>
            i
          </ActionButton>
          <ActionButton color="green" onClick={() => setScreen('goal')}>
            ♥
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

function ProfileScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Mentor Profile" onBack={() => setScreen('discover')} />
      <div className="p-5">
        <img src={mentor.image} alt={mentor.name} className="w-full h-64 object-cover rounded-[2rem]" />
        <h2 className="mt-5 text-3xl font-black text-[#001B5E]">{mentor.name}</h2>
        <p className="text-slate-500">{mentor.title}</p>
        <div className="bg-green-100 rounded-3xl p-4 mt-4">
          <div className="font-black text-green-700">🟢 Available This Week</div>
          <div className="text-sm text-green-700 mt-1">Next available: Thursday 10:00am</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Metric label="Rating" value={mentor.rating} />
          <Metric label="Sessions" value={mentor.sessions} />
          <Metric label="People Coached" value={mentor.coached} />
          <Metric label="Status Points" value={mentor.points} />
        </div>

        <button
          onClick={() => setScreen('goal')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Connect
        </button>
      </div>
    </div>
  );
}

function Header({ title, onBack }) {
  return (
    <div className="bg-white border-b px-5 pt-8 pb-3">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="h-10 w-10 rounded-full bg-slate-100">
          ←
        </button>
        <div className="font-black text-[#001B5E]">{title}</div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-3xl p-4 shadow">
      <div className="text-3xl font-black text-[#001B5E]">{value}</div>
      <div className="text-sm text-slate-500">{title}</div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="bg-white rounded-3xl p-4 shadow">
      <div className="text-2xl font-black text-[#001B5E]">{value}</div>
      <div className="text-xs text-slate-500 uppercase">{label}</div>
    </div>
  );
}

function ActionButton({ children, color, onClick }) {
  const colors = {
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-[#001B5E]',
  };

  return (
    <button
      onClick={onClick}
      className={`h-16 w-16 rounded-full bg-white shadow-xl text-3xl ${colors[color]}`}
    >
      {children}
    </button>
  );
}

function GoalScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Share Your Goal" onBack={() => setScreen('profile')} />
      <div className="p-4 pb-20 space-y-3 overflow-y-auto">
        <div className="bg-white rounded-3xl p-4 shadow mb-3">
          <div className="font-black text-[#001B5E]">Suggested Development Areas</div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="bg-slate-100 rounded-xl py-2 px-3 text-sm">Commercial</button>
            <button className="bg-slate-100 rounded-xl py-2 px-3 text-sm">Leadership</button>
            <button className="bg-slate-100 rounded-xl py-2 px-3 text-sm">Financial</button>
            <button className="bg-slate-100 rounded-xl py-2 px-3 text-sm">Influence</button>
          </div>
          <button
            onClick={() => setScreen('match')}
            className="w-full bg-[#001B5E] text-white py-4 rounded-3xl font-black mb-4"
          >
            Continue
          </button>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h2 className="text-xl font-black text-[#001B5E]">What do you want to learn?</h2>
          <div className="mt-4 bg-slate-50 rounded-2xl p-4 text-slate-700">
            Improve commercial decision making, contract management and stakeholder influence.
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 shadow mt-3">
          <h2 className="text-xl font-black text-[#001B5E]">Why is this important?</h2>
          <div className="mt-4 bg-slate-50 rounded-2xl p-4 text-slate-700">
            I want to prepare for broader leadership responsibilities and accelerate my career growth.
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 shadow mt-3">
          <h2 className="text-xl font-black text-[#001B5E]">Desired Outcome</h2>
          <div className="mt-4 bg-slate-50 rounded-2xl p-4 text-slate-700">
            Gain practical advice, build confidence and create a clear development plan.
          </div>
        </div>
      </div>
    </div>
  );
}

function MatchScreen({ mentor, setScreen }) {
  return (
    <div className="h-full flex flex-col">
      <Header title="It's a Match!" onBack={() => setScreen('home')} />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-8xl">🎉</div>
        <h1 className="text-4xl font-black text-[#001B5E] mt-5">Request Sent</h1>
        <p className="text-slate-600 mt-4">{mentor.name} has received your mentoring request.</p>
        <div className="bg-white rounded-3xl shadow-lg p-5 mt-8 w-full">
          <div className="text-lg font-black text-[#001B5E]">Next Step</div>
          <p className="text-sm text-slate-600 mt-2">
            Schedule your first coaching session and begin your development journey.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          <div className="bg-white rounded-3xl p-4 shadow">
            <div className="text-2xl font-black text-[#001B5E]">{mentor.rating}</div>
            <div className="text-xs text-slate-500 uppercase">Rating</div>
          </div>
          <div className="bg-white rounded-3xl p-4 shadow">
            <div className="text-2xl font-black text-[#001B5E]">{mentor.sessions}</div>
            <div className="text-xs text-slate-500 uppercase">Sessions</div>
          </div>
        </div>
        <button
          onClick={() => setScreen('schedule')}
          className="w-full mt-8 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Schedule Session
        </button>
      </div>
    </div>
  );
}

function MyMentorsScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="My Mentors" onBack={() => setScreen('home')} />
      <div className="p-5 pb-24">
        <div className="bg-[#001B5E] text-white rounded-3xl p-5">
          <div className="text-xs opacity-70">Upcoming Session</div>
          <div className="text-2xl font-black mt-2">Commercial Capability Coaching</div>
          <div className="mt-2 text-sm opacity-80">Thursday · 10:00 AM</div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow mt-5">
          <div className="font-black text-[#001B5E]">{mentor.name}</div>
          <div className="text-sm text-slate-500 mt-1">{mentor.title}</div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow mt-5">
          <div className="font-black text-[#001B5E]">Session History</div>
          <ul className="mt-3 text-sm space-y-2">
            <li>✓ Commercial Capability Coaching</li>
            <li>✓ Financial Acumen Discussion</li>
            <li>✓ Leadership Influence Workshop</li>
          </ul>
        </div>

        <button
          onClick={() => setScreen('messages')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Open Messages
        </button>
      </div>

      <BottomNav activeScreen="mentors" setScreen={setScreen} />
    </div>
  );
}

function MessagesScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Messages" onBack={() => setScreen('mentors')} />
      <div className="p-4 pb-20 space-y-3">
        <div className="bg-white rounded-3xl p-3 shadow w-[80%]">Great to connect. What would you like to focus on first?</div>
        <div className="bg-[#001B5E] text-white rounded-3xl p-3 shadow ml-auto w-[80%]">
          I want to improve commercial decision making and strengthen P&L understanding.
        </div>
        <div className="bg-white rounded-3xl p-4 shadow w-[80%]">
          Excellent. Bring one current business case and we can work through it together.
        </div>
        <div className="bg-blue-50 rounded-3xl p-4 mt-4">
          <div className="font-black text-[#001B5E]">AI Coaching Summary</div>
          <ul className="text-sm mt-3 text-slate-700 space-y-2">
            <li>• Focus area: Commercial capability</li>
            <li>• Bring a real business example</li>
            <li>• Create a 30-day development plan</li>
          </ul>
        </div>
      </div>

      <BottomNav activeScreen="messages" setScreen={setScreen} />
    </div>
  );
}

function LeaderboardScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Leaderboard" onBack={() => setScreen('messages')} />
      <div className="p-5 pb-24">
        <div className="bg-[#001B5E] text-white rounded-3xl p-5">
          <div className="text-xs opacity-70">Top Mentor This Month</div>
          <div className="text-3xl font-black mt-2">Aisha Ndiovu</div>
          <div className="mt-2">2380 Points</div>
        </div>

        <div className="space-y-4 mt-5">
          <LeaderboardRow rank="1" name="Aisha Ndiovu" points="2380" />
          <LeaderboardRow rank="2" name="Sophie Martin" points="1245" />
          <LeaderboardRow rank="3" name="Michael Chen" points="780" />
        </div>

        <button
          onClick={() => setScreen('status')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          View Status
        </button>
      </div>

      <BottomNav activeScreen="leaderboard" setScreen={setScreen} />
    </div>
  );
}

function StatusScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Status & Badges" onBack={() => setScreen('plan')} />
      <div className="p-5 pb-24">
        <div className="bg-[#001B5E] text-white rounded-3xl p-6">
          <div className="text-xs opacity-70">Current Status</div>
          <div className="text-3xl font-black mt-2">Advanced Mentor</div>
          <div className="mt-4">{mentor.points} Points</div>
        </div>

        <div className="bg-white rounded-3xl shadow p-5 mt-5">
          <div className="font-black text-[#001B5E]">Progress to Expert</div>
          <div className="w-full bg-slate-200 rounded-full h-4 mt-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '62%' }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <BadgeCard icon="🏅" title="Advanced" />
          <BadgeCard icon="⭐" title="Top Rated" />
          <BadgeCard icon="🎯" title="Impact" />
          <BadgeCard icon="🤝" title="Trusted" />
        </div>

        <button
          onClick={() => setScreen('progress')}
          className="w-full mt-6 bg-white border border-[#001B5E] text-[#001B5E] py-5 rounded-3xl font-black"
        >
          View Progress Dashboard
        </button>

        <div className="bg-blue-50 rounded-3xl p-5 mt-5">
          <div className="font-black text-[#001B5E]">🤖 AI Career Insight</div>
          <p className="text-sm mt-3">
            Your strongest growth area is Commercial Capability.
            Recommended next focus: Financial Acumen.
          </p>
        </div>

        <button
          onClick={() => setScreen('home')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Return Home
        </button>
      </div>

      <BottomNav activeScreen="status" setScreen={setScreen} />
    </div>
  );
}

function LeaderboardRow({ rank, name, points }) {
  return (
    <div className="bg-white rounded-3xl p-4 shadow flex justify-between">
      <div className="font-black text-[#001B5E]">#{rank} {name}</div>
      <div className="font-black">{points}</div>
    </div>
  );
}

function BadgeCard({ icon, title }) {
  return (
    <div className="bg-white rounded-3xl shadow p-4 text-center">
      <div className="text-4xl">{icon}</div>
      <div className="mt-2 font-black text-[#001B5E]">{title}</div>
    </div>
  );
}

function ScheduleScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Schedule Session" onBack={() => setScreen('match')} />
      <div className="p-5 pb-24">
        <div className="bg-[#001B5E] text-white rounded-3xl p-5">
          <div className="text-xs opacity-70">Selected Mentor</div>
          <div className="text-2xl font-black mt-2">{mentor.name}</div>
          <div className="text-sm opacity-80 mt-1">{mentor.title}</div>
        </div>

        <div className="mt-6">
          <h3 className="font-black text-[#001B5E]">Available Dates</h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <button className="bg-white rounded-2xl p-4 shadow font-black text-[#001B5E]">23 Jul</button>
            <button className="bg-white rounded-2xl p-4 shadow font-black text-[#001B5E]">24 Jul</button>
            <button className="bg-white rounded-2xl p-4 shadow font-black text-[#001B5E]">25 Jul</button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-black text-[#001B5E]">Available Times</h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <button className="bg-white rounded-2xl p-4 shadow font-black text-[#001B5E]">10:00</button>
            <button className="bg-white rounded-2xl p-4 shadow font-black text-[#001B5E]">11:00</button>
            <button className="bg-white rounded-2xl p-4 shadow font-black text-[#001B5E]">14:00</button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-5 mt-6">
          <div className="font-black text-[#001B5E]">Session Focus</div>
          <p className="text-sm text-slate-600 mt-2">
            Commercial decision-making, P&L understanding and contract management.
          </p>
        </div>

        <button
          onClick={() => setScreen('mentors')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Confirm Session
        </button>
      </div>

      <BottomNav activeScreen="mentors" setScreen={setScreen} />
    </div>
  );
}

function DevelopmentPlanScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="90 Day Plan" onBack={() => setScreen('messages')} />
      <div className="p-5 pb-24">
        <div className="bg-[#001B5E] text-white rounded-3xl p-5">
          <div className="text-xs opacity-70">Development Focus</div>
          <div className="text-2xl font-black mt-2">Commercial Capability</div>
          <p className="text-sm opacity-80 mt-2">
            Built from your mentoring goal and coaching discussion with {mentor.name}.
          </p>
        </div>

        <PlanCard
          month="Month 1"
          title="Commercial Acumen"
          detail="Understand how supply chain decisions influence P&L outcomes."
        />
        <PlanCard
          month="Month 2"
          title="Financial Literacy"
          detail="Build confidence interpreting cost, margin and investment trade-offs."
        />
        <PlanCard
          month="Month 3"
          title="Negotiation Skills"
          detail="Apply commercial thinking to contract and supplier discussions."
        />

        <button
          onClick={() => setScreen('status')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Continue to Status
        </button>
      </div>

      <BottomNav activeScreen="plan" setScreen={setScreen} />
    </div>
  );
}

function PlanCard({ month, title, detail }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow mt-4">
      <div className="text-xs font-black text-slate-400 uppercase">{month}</div>
      <div className="text-xl font-black text-[#001B5E] mt-1">{title}</div>
      <p className="text-sm text-slate-600 mt-2">{detail}</p>
    </div>
  );
}

function ProgressDashboardScreen({ mentor, setScreen }) {
  return (
    <div className="h-full">
      <Header title="Progress Dashboard" onBack={() => setScreen('status')} />
      <div className="p-5 pb-24">
        <div className="bg-[#001B5E] text-white rounded-3xl p-5">
          <div className="text-xs opacity-70">Development Progress</div>
          <div className="text-3xl font-black mt-2">74%</div>
          <p className="text-sm opacity-80 mt-2">
            Overall progress against your current E3 Connect development plan.
          </p>
        </div>

        <ProgressBar title="Commercial Acumen" value="78%" width="78%" />
        <ProgressBar title="Leadership Confidence" value="65%" width="65%" />
        <ProgressBar title="Negotiation Skills" value="82%" width="82%" />

        <div className="bg-white rounded-3xl p-5 shadow mt-5">
          <div className="font-black text-[#001B5E]">Coaching Impact</div>
          <ul className="text-sm text-slate-600 mt-3 space-y-2">
            <li>• 1 mentor connection created</li>
            <li>• 1 coaching session scheduled</li>
            <li>• 3 development focus areas defined</li>
            <li>• 90 day plan created</li>
          </ul>
        </div>

        <button
          onClick={() => setScreen('home')}
          className="w-full mt-6 bg-[#001B5E] text-white py-5 rounded-3xl font-black"
        >
          Return Home
        </button>
      </div>

      <BottomNav activeScreen="status" setScreen={setScreen} />
    </div>
  );
}

function ProgressBar({ title, value, width }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow mt-4">
      <div className="flex justify-between items-center">
        <div className="font-black text-[#001B5E]">{title}</div>
        <div className="font-black text-[#001B5E]">{value}</div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-4 mt-4">
        <div className="bg-green-500 h-4 rounded-full" style={{ width }} />
      </div>
    </div>
  );
}

function BottomNav({ activeScreen, setScreen }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 rounded-b-[2.5rem] flex justify-around items-center">
      <NavItem label="Home" icon="🏠" active={activeScreen === 'home'} onClick={() => setScreen('home')} />
      <NavItem label="Mentors" icon="👥" active={activeScreen === 'mentors'} onClick={() => setScreen('mentors')} />
      <NavItem label="Messages" icon="💬" active={activeScreen === 'messages'} onClick={() => setScreen('messages')} />
      <NavItem label="Plan" icon="📋" active={activeScreen === 'plan'} onClick={() => setScreen('plan')} />
      <NavItem label="Status" icon="👤" active={activeScreen === 'status'} onClick={() => setScreen('status')} />
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center">
      <div className={`text-xl ${active ? 'text-[#001B5E]' : 'text-slate-400'}`}>{icon}</div>
      <div className={`text-[10px] font-bold mt-1 ${active ? 'text-[#001B5E]' : 'text-slate-400'}`}>{label}</div>
    </button>
  );
}
