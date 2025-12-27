import Card from "@/components/ui/Card";

export default function ParentDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '32px', fontSize: '2rem', fontWeight: 800 }}>Parent Dashboard 👨‍👩‍👧</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                <Card>
                    <h3>Alex's Progress</h3>
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Math</p>
                        <div style={{ height: '8px', background: '#F4F5F7', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: '80%', height: '100%', background: 'var(--primary)' }}></div>
                        </div>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Science</p>
                        <div style={{ height: '8px', background: '#F4F5F7', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: '60%', height: '100%', background: 'var(--accent-green)' }}></div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <h3>Recent Activity</h3>
                    <ul style={{ listStyle: 'none', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li>✅ Completed "Math Adventure"</li>
                        <li>🏆 Earned "Early Bird" Badge</li>
                        <li>📅 Upcoming: Parent Teacher Meeting (Fri)</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}
