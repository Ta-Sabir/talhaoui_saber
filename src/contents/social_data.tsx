export type SocialIcons = "github" | "twitter" | "linkedin" | "facebook";

export const socialLinks = {
  github: "https://github.com/Ta-Sabir",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com/in/saber-talhaoui-214106262/",
  facebook: "https://www.facebook.com/",
};

export const initialHoverState: Record<SocialIcons, boolean> = {
  github: false,
  twitter: false,
  linkedin: false,
  facebook: false,
};