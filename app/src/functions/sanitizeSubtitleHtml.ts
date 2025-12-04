export const sanitizeSubtitleHtml = (input: string): string => {
  const allowed = ['b', 'i', 'u', 'font', 'i', 'b', 'u', 'span', 'c'];
  return input.replace(/<\/?([a-zA-Z0-9]+)(\s[^>]*)?>/g, (match, tag) => {
    const t = String(tag).toLowerCase();
    if (allowed.includes(t)) {
      return match[1] === '/' ? `</${t}>` : `<${t}>`;
    }
    return '';
  });
};