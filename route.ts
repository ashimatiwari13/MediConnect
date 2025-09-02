export async function GET() {
  const payload = {
    donated: 284,
    available: 132,
    claimed: 91,
    verified: 203,
    // added fields for homepage stats counters
    totalDonations: 284,
    livesImpacted: 740,
    activeDonors: 76,
    ngoPartners: 18,
  }
  return new Response(JSON.stringify(payload), { headers: { "content-type": "application/json" } })
}
