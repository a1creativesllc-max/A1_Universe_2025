// dashboard/modules.js
export async function listOutputs() {
  try {
    const res = await fetch('./outputs-index.json'); // dashboard-level fetch
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('❌ Error loading outputs-index.json:', err);
    return [];
  }
}
