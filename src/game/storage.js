// localStorage can be unavailable (private mode, blocked storage, embedded
// previews), so every access is wrapped and falls back gracefully.
const PREFIX = "ra-net-shooter:";

export function load(key, fallback) {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Ignore: settings simply won't persist.
  }
}
