// --- Fraud Analysis Simulation ---
const form = document.getElementById("fraudForm");
const resultArea = document.getElementById("resultArea");
const statusText = document.getElementById("statusText");
const confidence = document.getElementById("confidence");
const factors = document.getElementById("factors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultArea.classList.remove("hidden");
  statusText.textContent = "Analyzing Transaction...";
  statusText.className = "text-2xl font-semibold text-cyan-400 animate-pulse";
  confidence.textContent = "";
  factors.innerHTML = "";

  setTimeout(() => {
    const isFraud = Math.random() < 0.2; // 20% fraud chance
    const score = (Math.random() * 5 + 95).toFixed(2);

    if (isFraud) {
      statusText.textContent = "⚠️ FRAUD DETECTED";
      statusText.className = "text-3xl font-bold text-red-400";
      confidence.textContent = `Confidence: ${score}% Fraud Risk`;
      factors.innerHTML = `
        <li>• High Transaction Velocity</li>
        <li>• Unusual Geo-location</li>
        <li>• Suspicious Merchant Pattern</li>
        <li>• New Device Signature</li>`;
      resultArea.className = "mt-8 text-center p-6 rounded-xl border border-red-700 bg-red-600/20";
    } else {
      statusText.textContent = "✅ TRANSACTION SAFE";
      statusText.className = "text-3xl font-bold text-emerald-400";
      confidence.textContent = `Confidence: ${score}% Legitimate`;
      factors.innerHTML = `
        <li>• Known User Behavior</li>
        <li>• Consistent Transaction Pattern</li>
        <li>• Verified Merchant</li>`;
      resultArea.className = "mt-8 text-center p-6 rounded-xl border border-emerald-700 bg-emerald-600/20";
    }
  }, 1500);
});

// --- Live Metrics Simulation ---
const totalTx = document.getElementById("totalTx");
const fraudRate = document.getElementById("fraudRate");
const blockedAmount = document.getElementById("blockedAmount");
const events = document.getElementById("events");

const sampleEvents = [
  "User 451: Velocity Spike - Flagged",
  "User 982: Geo Mismatch - Blocked",
  "User 177: Multiple Card Attempts",
  "User 563: New Device Login",
  "User 720: High-Value Purchase Alert"
];

function updateMetrics() {
  totalTx.textContent = (14500 + Math.floor(Math.random() * 200)).toLocaleString();
  fraudRate.textContent = (Math.random() * 0.3).toFixed(2) + "%";
  blockedAmount.textContent = "$" + (150000 + Math.floor(Math.random() * 5000)).toLocaleString();

  events.innerHTML = sampleEvents
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map(e => `<li>• ${e}</li>`)
    .join("");
}

updateMetrics();
setInterval(updateMetrics, 3000);
