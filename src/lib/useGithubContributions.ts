export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
  weekday: number; // 0-6 (Sunday-Saturday)
}

export interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export async function fetchContributions(
  username: string,
  year?: number
): Promise<ContributionCalendar> {
  // If year is provided, use it; otherwise fetch last year of data
  const from = year ? `${year}-01-01T00:00:00Z` : undefined;
  const to = year ? `${year}-12-31T23:59:59Z` : undefined;

  const query = `
    query($username: String!, $from: DateTime, $to: DateTime) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              firstDay
              contributionDays {
                date
                contributionCount
                color
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      query,
      variables: { username, from, to }
    }),
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const json = await res.json();
  
  if (json.errors) {
    throw new Error(`GraphQL error: ${json.errors[0].message}`);
  }

  return json.data.user.contributionsCollection.contributionCalendar;
}
