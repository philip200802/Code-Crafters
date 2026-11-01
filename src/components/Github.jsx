import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import FloatingIcons from "./FloatingIcons";

export default function Github({ isLight }) {
  const username = "philip200802";

  const [stats, setStats] = useState({
    repositories: 0,
    contributions: 0,
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    const getGithubStats = async () => {
      try {
        const profileResponse = await fetch(
          `https://api.github.com/users/${username}`
        );

        const profile = await profileResponse.json();
        
        const contributionResponse = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        const contributionData = await contributionResponse.json();

        setStats({
          repositories: profile.public_repos,
          followers: profile.followers,
          following: profile.following,
          contributions: contributionData.total?.lastYear || 0,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    getGithubStats();
  }, []);

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-[#080808] px-6 py-[75px] sm:px-8 lg:px-[60px]"
    >
      <FloatingIcons />
      <div className="mx-auto max-w-[1294px]">

        <h2 className="mb-1 text-3xl font-bold text-white">
          Github Activity
        </h2>

        <div className="mb-6 h-[1px] w-20 bg-white"></div>
        <div className="rounded-xl border border-white/15 bg-[#090909] p-5 sm:p-6">

          <div className="mb-6 flex items-center gap-2 text-sm sm:text-base">
            <FaGithub className="shrink-0 text-xl text-white sm:text-2xl" />
            <p className="text-gray-300">
              <span className="font-medium text-white">@{username}</span>{" "}
              <span className="text-gray-400">- coding as a developer</span>
            </p>
          </div>

          <div className="flex flex-col gap-8 xl:flex-row xl:gap-10">
            <div className="min-w-0 flex-1 overflow-x-auto">
              <p className="mb-4 text-sm text-gray-400">
                Contributions in the last year
              </p>

              <GitHubCalendar
                username={username}
                colorScheme={isLight ? "light" : "dark"}
                showTotalCount={false}
                showColorLegend={false}
                showMonthLabels={true}
              />
            </div>

            <aside className="grid shrink-0 gap-6 sm:grid-cols-2 xl:w-[240px] xl:grid-cols-2 xl:content-start">
              <div className="sm:col-span-2">
                <p className="mb-2 text-sm text-gray-400">
                  Contribution intensity
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span
                      key={level}
                      className={`h-3 w-3 rounded-sm ${
                        level === 0
                          ? "bg-[#292929]"
                          : level === 1
                            ? "bg-[#bbf7d0]"
                            : level === 2
                              ? "bg-[#22c55e]"
                              : level === 3
                                ? "bg-[#16a34a]"
                                : "bg-[#047857]"
                      }`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <GithubStat label="Repositories" value={stats.repositories} />
              <GithubStat label="Contributions" value={stats.contributions} />
              <GithubStat label="Followers" value={stats.followers} />
              <GithubStat label="Following" value={stats.following} />
            </aside>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-gray-300 underline underline-offset-4 transition hover:text-white"
          >
            View full GitHub profile
          </a>

        </div>
      </div>
    </section>
  );
}

function GithubStat({ label, value }) {
  return (
    <div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-gray-400">{label}</p>
    </div>
  );
}