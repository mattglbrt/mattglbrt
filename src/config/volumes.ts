export type VolumePhileSort = {
  by: "date" | "order";
  direction: "asc" | "desc";
};

export type VolumeConfig = {
  title: string;
  subtitle?: string;
  listLabel: string;
  postscript?: string[];
  entryPrefix?: string;
  entryLabel?: "index" | "year";
  reverseEntryNumbers?: boolean;
  phileSort?: VolumePhileSort;
};

export const defaultVolumeConfig = (number: number): VolumeConfig => ({
  title: `Volume ${number}`,
  listLabel: `Volume ${number}`,
  phileSort: {
    by: "date",
    direction: "desc"
  },
  postscript: ["  ──[ EOF ]──────────────────────────────//──"]
});

export const volumeConfigs = new Map<number, VolumeConfig>([
  [
    1,
    {
      title: "Log",
      listLabel: "Log",
      phileSort: {
        by: "date",
        direction: "desc"
      },
      entryPrefix: "L",
      postscript: [
        "  ──[ EOF ]──────────────────────────────//──",
        "",
        "  Thanks for visiting my weird little corner",
        "  of the internet.",
        "",
        "  Matt Gilbert"
      ]
    }
  ]
]);

export function volumeConfig(number: number): VolumeConfig {
  return volumeConfigs.get(number) ?? defaultVolumeConfig(number);
}
