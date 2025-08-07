import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import ChatBotWrapper from "../../components/ChatBotWrapper";

function BusinessDashboard() {
  const [leads, setLeads] = useState(null);
  const [engagement, setEngagement] = useState([]);
  const [plan, setPlan] = useState(null);
  const [team, setTeam] = useState(null);
  const [marketing, setMarketing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = new URLSearchParams(window.location.search);
  const businessmanId = searchParams.get("id");

  useEffect(() => {
    if (!businessmanId) return;

    const fetchAll = async () => {
      try {
        const [
          leadsRes,
          engagementRes,
          planRes,
          teamRes,
          marketingRes
        ] = await Promise.all([
          fetch(`http://localhost:8083/api/business/${businessmanId}/leads-summary`),
          fetch(`http://localhost:8083/api/business/${businessmanId}/engagement-graph`),
          fetch(`http://localhost:8083/api/business/${businessmanId}/plan-usage`),
          fetch(`http://localhost:8083/api/business/${businessmanId}/team-activity`),
          fetch(`http://localhost:8083/api/business/${businessmanId}/marketing-insights`)
        ]);

        if (!leadsRes.ok || !engagementRes.ok || !planRes.ok || !teamRes.ok || !marketingRes.ok) {
          throw new Error("One or more API calls failed");
        }

        const leadsData = await leadsRes.json();
        const engagementData = await engagementRes.json();
        const planData = await planRes.json();
        const teamData = await teamRes.json();
        const marketingData = await marketingRes.json();

        setLeads(leadsData);
        setEngagement(
          (engagementData.timeSeriesData || []).map((val, idx) => ({
            name: `T${idx + 1}`,
            engagement: val
          }))
        );
        setPlan(planData);
        setTeam(teamData);
        setMarketing(marketingData);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [businessmanId]);

  if (!businessmanId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800 text-xl font-semibold">
        No businessman ID provided in URL.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 text-blue-800 text-xl font-semibold">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-100 text-red-800 text-xl font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-8 font-sans"
      style={{
        backgroundImage: "url('/business-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-800 dark:hover:text-white transition"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-300 text-center drop-shadow">
          Business Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <StatCard title="Total Leads" value={leads?.totalLeads ?? "--"} />
          <StatCard title="Conversion Rate" value={leads?.conversionRate ?? "--"} />
          <StatCard title="Customers" value={leads?.customerList?.length ?? "--"}>
            <ul className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {leads?.customerList?.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </StatCard>
          <StatCard title="Current Plan" value={plan?.currentPlan ?? "--"}>
            <div className="text-xs mt-2 text-gray-600 dark:text-gray-300">
              Usage: {plan?.usage ?? "--"} <br />
              Quota Remaining: {plan?.quotaRemaining ?? "--"}
            </div>
          </StatCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ChartCard title="Engagement Graph" data={engagement} dataKey="engagement" color="#34d399" />

          <StatCard title="Team Activity" value={team?.tasksCompleted ?? "--"}>
            <div className="text-xs mt-2 text-gray-600 dark:text-gray-300">
              <div>Recent Actions:</div>
              <ul>
                {team?.recentActions?.map((a, i) => <li key={i}>- {a}</li>)}
              </ul>
              <div>Login Times: {team?.loginTimes?.join(", ")}</div>
            </div>
          </StatCard>

          <StatCard title="Marketing Insights" value={marketing?.campaignStats ?? "--"}>
            <div className="text-xs mt-2 text-gray-600 dark:text-gray-300">
              Chatbot Conversion Rate: {marketing?.chatbotConversionRate ?? "--"}<br />
              User Interactions: {marketing?.userInteractions ?? "--"}
            </div>
          </StatCard>
        </div>
      </div>

      <ChatBotWrapper />
    </div>
  );
}

export default BusinessDashboard;
