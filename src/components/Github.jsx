import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
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
        // Get GitHub profile information
        const profileResponse = await fetch(
          `https://api.github.com/users/${username}`
        );

        const profile = await profileResponse.json();

        // Get contribution information
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
      <div className="mx-auto max-w-[1294px]">

        {/* Heading */}
        <h2 className="mb-1 text-3xl font-bold text-white">
          Github Activity
        </h2>

        <div className="mb-6 h-[1px] w-20 bg-white"></div>

        {/* Main Card */}
        <div className="rounded-xl border border-white/15 bg-[#090909] p-6">

          {/* Profile */}
          <div className="mb-6 flex items-center gap-3">
            <div className="text-2xl text-white">
              ◉
            </div>

            <p className="text-gray-300">
              <span className="font-medium text-white">
                @{username}
              </span>{" "}
              <span className="text-gray-400">
                — coding as a developer
              </span>
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-8 lg:flex-row">

            {/* Contribution Calendar */}
            <div className="min-w-0 flex-1 overflow-x-auto">
              <p className="mb-4 text-sm text-gray-400">
                Contributions in the last year
              </p>

              <GitHubCalendar
                username={username}
                colorScheme="dark"
                showTotalCount={false}
                showColorLegend={true}
                showMonthLabels={true}
              />
            </div>

            {/* Statistics */}
            <div className="grid min-w-[220px] grid-cols-2 gap-x-10 gap-y-6 lg:w-[250px]">

              {/* Repositories */}
              <div>
                <p className="text-2xl font-bold text-white">
                  {stats.repositories}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Repositories
                </p>
              </div>

              {/* Contributions */}
              <div>
                <p className="text-2xl font-bold text-white">
                  {stats.contributions}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Contributions
                </p>
              </div>

              {/* Followers */}
              <div>
                <p className="text-2xl font-bold text-white">
                  {stats.followers}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Followers
                </p>
              </div>

              {/* Following */}
              <div>
                <p className="text-2xl font-bold text-white">
                  {stats.following}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Following
                </p>
              </div>

            </div>
          </div>

          {/* GitHub Profile */}
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