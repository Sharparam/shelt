interface SocialProfile {
  id: string;
  name: string;
  url: string;
}

export const githubProfile: SocialProfile = {
  id: 'github',
  name: 'GitHub',
  url: 'https://github.com/Sharparam'
};

export const soProfile: SocialProfile = {
  id: 'stackoverflow',
  name: 'Stack Overflow',
  url: 'https://stackoverflow.com/users/1104531/sharparam'
};

export const keybaseProfile: SocialProfile = {
  id: 'keybase',
  name: 'Keybase',
  url: 'https://keybase.io/sharparam'
};

export const matrixProfile: SocialProfile = {
  id: 'matrix',
  name: 'Matrix',
  url: 'https://matrix.to/#/@sharparam:sharparam.com'
};

export const twitterProfile: SocialProfile = {
  id: 'twitter',
  name: 'Twitter',
  url: 'https://twitter.com/Sharparam'
};

export const telegramProfile: SocialProfile = {
  id: 'telegram',
  name: 'Telegram',
  url: 'https://t.me/sharparam'
};

export const youtubeProfile: SocialProfile = {
  id: 'youtube',
  name: 'YouTube',
  url: 'https://www.youtube.com/c/AdamHellberg'
};

export const redditProfile: SocialProfile = {
  id: 'reddit',
  name: 'Reddit',
  url: 'https://www.reddit.com/user/sharparam'
};

export const linkedinProfile: SocialProfile = {
  id: 'linkedin',
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/sharparam'
};

export const emailProfile: SocialProfile = {
  id: 'email',
  name: 'Email',
  url: 'mailto:sharparam@sharparam.com'
};

export const profiles = [
  githubProfile,
  soProfile,
  keybaseProfile,
  matrixProfile,
  twitterProfile,
  telegramProfile,
  youtubeProfile,
  redditProfile,
  linkedinProfile,
  emailProfile
];
