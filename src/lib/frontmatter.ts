// Minimal front matter parser for news posts. Shared by the site and the
// build-time link preview generator (vite.config.ts), so it must not use DOM APIs.
//
// Supports:
//   key: value              (quotes optional)
//   key: [a.jpg, b.jpg]     (inline list)
//   key:                    (block list)
//     - a.jpg
//     - b.jpg

export type FrontMatterValue = string | boolean | string[];

export interface ParsedFile {
  data: Record<string, FrontMatterValue>;
  body: string;
}

function unquote(value: string): string {
  const v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

function parseScalar(value: string): string | boolean {
  const v = unquote(value);
  if (value.trim() === 'true') return true;
  if (value.trim() === 'false') return false;
  return v;
}

export function parseFrontMatter(raw: string): ParsedFile {
  const text = raw.replace(/\r\n/g, '\n');
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
  if (!match) return { data: {}, body: text };

  const data: Record<string, FrontMatterValue> = {};
  let listKey: string | null = null;

  for (const line of match[1].split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const item = /^\s+-\s+(.*)$/.exec(line);
    if (item && listKey) {
      (data[listKey] as string[]).push(unquote(item[1]));
      continue;
    }

    const pair = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line);
    if (!pair) continue;
    const [, key, value] = pair;
    listKey = null;

    if (value === '') {
      data[key] = [];
      listKey = key;
    } else if (value.trim().startsWith('[') && value.trim().endsWith(']')) {
      data[key] = value.trim().slice(1, -1).split(',').map(unquote).filter(Boolean);
    } else {
      data[key] = parseScalar(value);
    }
  }

  return { data, body: match[2].trim() };
}
