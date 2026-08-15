const API_BASE = 'http://localhost:3000';

async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }

    return data;
  } catch (err) {
    return { success: false, error: err.message || 'Network error' };
  }
}

export async function healthCheck() {
  return apiFetch('/api/health');
}

export async function fetchYouthList(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      params.append(key, val);
    }
  });
  const queryString = params.toString();
  return apiFetch(`/api/youth${queryString ? `?${queryString}` : ''}`);
}

export async function fetchYouthById(id) {
  return apiFetch(`/api/youth/${id}`);
}

export async function fetchStats() {
  return apiFetch('/api/stats');
}

export async function fetchMahallas() {
  return apiFetch('/api/mahallas');
}

export async function sendAiMessage(message, userRole, contextData = null) {
  return apiFetch('/api/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ message, userRole, contextData }),
  });
}

