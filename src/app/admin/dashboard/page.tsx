import Card from "@/components/ui/Card";

export default function AdminDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '32px', fontSize: '2rem', fontWeight: 800 }}>Campus Safety 🏫</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                <Card>
                    <h3>Total Headcount</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900 }}>1,234</p>
                </Card>
                <Card>
                    <h3>Alert Status</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-green)' }}>Normal</p>
                </Card>
                <Card>
                    <h3>Fire Extinguishers</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900 }}>45/45</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>All Valid</p>
                </Card>
                <Card>
                    <h3>Resilience Score</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-yellow)' }}>A+</p>
                </Card>
            </div>
        </div>
    );
}
