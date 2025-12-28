import Card from "@/components/ui/Card";

export default function ParentDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '32px', fontSize: '2rem', fontWeight: 800 }}>Safety Tracker 🛡️</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                <Card>
                    <h3>Rohan's Status</h3>
                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '2rem' }}>✅</span>
                        <div>
                            <p style={{ fontWeight: 700, fontSize: '1.2rem' }}>Marked Safe</p>
                            <p style={{ color: 'var(--text-muted)' }}>Last check: School Campus, 2:00 PM</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <h3>Preparedness Badge</h3>
                    <ul style={{ listStyle: 'none', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li>🥇 Fire Safety Expert</li>
                        <li>🥈 First Aid Beginner</li>
                        <li>📅 Next: Earthquake Drill (Fri)</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}
