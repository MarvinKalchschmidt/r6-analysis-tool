import { STATS, STATS_0 } from "@/constants";

interface PlayerMapStatsProps {
  stats: STATS[];
}

export default function PlayerMapStats({ stats }: PlayerMapStatsProps) {
  const headers = Object.keys(STATS_0[0]);
  return (
    <div className="flex flex-col pt-2 px-4 pb-4 gap-y-4 mt-[-12px] bg-[#0e0d0d] border border-[#181717] rounded-bl-lg rounded-br-lg border-t-0">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {STATS_0.map((player, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td
                    key={`${index}-${header}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {player[header as keyof typeof player]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
