import { portfolioData } from "@/data/portfolio"

export interface Bookmark {
  label: string
  url: string
  color: string
  initial: string
}

const ensureHttps = (u: string) => (u.startsWith("http") ? u : `https://${u}`)

export const bookmarks: Bookmark[] = [
  {
    label: "GitHub",
    url: ensureHttps(portfolioData.social.github),
    color: "#24292e",
    initial: "GH",
  },
  {
    label: "LinkedIn",
    url: ensureHttps(portfolioData.social.linkedin),
    color: "#0077B5",
    initial: "in",
  },
  {
    label: "Instagram",
    url: ensureHttps(`instagram.com/${portfolioData.social.instagram.replace(/^@/, "")}`),
    color: "#E1306C",
    initial: "Ig",
  },
  {
    label: "Email",
    url: `mailto:${portfolioData.personal.email}`,
    color: "#007AFF",
    initial: "@",
  },
  {
    label: "Resume",
    url: `mailto:${portfolioData.personal.email}?subject=Resume%20Request`,
    color: "#34C759",
    initial: "CV",
  },
  {
    label: "Medium",
    url: "https://medium.com/@skyfury",
    color: "#000000",
    initial: "M",
  },
]
