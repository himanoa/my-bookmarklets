const makeQueryLink = (siteUrl: string) => {
  return `https://www.google.com/search?q=site:${siteUrl}`
};

location.href = makeQueryLink(new URL(location.href).hostname)
