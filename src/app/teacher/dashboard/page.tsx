import Card from "@/components/ui/Card";

export default function TeacherDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '32px', fontSize: '2rem', fontWeight: 800 }}>Drill Status 📢</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <Card>
                    <h3>Students Safe</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>32/32</p>
                </Card>
                <Card>
                    <h3>Next Drill</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-pink)', marginTop: '8px' }}>Fire Evacuation</p>
                    <p style={{ color: 'var(--text-muted)' }}>Tomorrow, 10:00 AM</p>
                </Card>
                <Card>
                    <h3>Avg. Evacuation Time</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-green)' }}>2m 15s</p>
                </Card>
            </div>
        </div>
    );
}
