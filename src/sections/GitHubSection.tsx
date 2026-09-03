import React, { useState } from 'react';
import { 
  Github, 
  GitPullRequest, 
  GitCommit, 
  Star, 
  GitFork, 
  ExternalLink, 
  Code2,
  CheckCircle2,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { GITHUB_STATS, PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section
      id="github"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E4DE]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#6D5DFB] font-mono font-semibold">
            ✦ OPEN SOURCE & CODE
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#171717]">
            DEVELOPER ACTIVITY & REPOSITORIES
          </h2>
          <p className="text-[#626262] text-sm sm:text-base max-w-2xl">
            Public code contributions, open-source repositories, and code hygiene tracking.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-white hover:bg-[#6D5DFB] transition-colors text-xs font-semibold tracking-tight shadow-xs cursor-pointer w-fit"
        >
          <Github className="w-4 h-4" />
          <span>View GitHub Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-5 rounded-2xl border border-[#E7E4DE] shadow-xs">
          <div className="flex items-center justify-between text-[#626262] mb-2">
            <span className="text-xs font-medium">Public Commits</span>
            <GitCommit className="w-4 h-4 text-[#6D5DFB]" />
          </div>
          <p className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
            {GITHUB_STATS.totalCommits}+
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E7E4DE] shadow-xs">
          <div className="flex items-center justify-between text-[#626262] mb-2">
            <span className="text-xs font-medium">Pull Requests</span>
            <GitPullRequest className="w-4 h-4 text-[#E98A6A]" />
          </div>
          <p className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
            {GITHUB_STATS.pullRequests}+
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E7E4DE] shadow-xs">
          <div className="flex items-center justify-between text-[#626262] mb-2">
            <span className="text-xs font-medium">Commit Streak</span>
            <Flame className="w-4 h-4 text-[#4F9D69]" />
          </div>
          <p className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
            {GITHUB_STATS.streakDays} Days
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E7E4DE] shadow-xs">
          <div className="flex items-center justify-between text-[#626262] mb-2">
            <span className="text-xs font-medium">Repo Stars</span>
            <Star className="w-4 h-4 text-[#6D5DFB]" />
          </div>
          <p className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
            {GITHUB_STATS.starsReceived}
          </p>
        </div>
      </div>

      {/* Selected Repositories Grid */}
      <div className="space-y-4 mb-10">
        <p className="text-xs font-mono uppercase tracking-wider text-[#626262] font-semibold">
          Selected Open-Source Repositories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_STATS.pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-[#E7E4DE] shadow-editorial hover:border-[#6D5DFB] transition-all duration-200 flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#171717]" />
                    <span className="font-mono text-sm font-bold text-[#171717] group-hover:text-[#6D5DFB] transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#626262] group-hover:text-[#6D5DFB] transition-colors" />
                </div>
                <p className="text-xs text-[#626262] leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#626262] pt-3 border-t border-[#E7E4DE]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="font-mono">{repo.language}</span>
                </div>
                <div className="flex items-center gap-4 font-mono text-[11px]">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#6D5DFB]" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity Stream */}
      <div className="bg-white rounded-2xl border border-[#E7E4DE] p-6 sm:p-8 shadow-xs">
        <p className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold mb-4">
          Recent Code Activity
        </p>

        <div className="space-y-3">
          {GITHUB_STATS.recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#4F9D69]" />
                <span className="font-mono font-semibold text-[#171717]">{activity.repo}</span>
                <span className="text-[#626262] truncate max-w-md">{activity.message}</span>
              </div>
              <span className="font-mono text-[#626262] text-[11px] shrink-0 sm:pl-4">
                {activity.timeAgo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
