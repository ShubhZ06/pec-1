import Card from "@/components/ui/Card";

export default function AdminDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '32px', fontSize: '2rem', fontWeight: 800 }}>Admin Panel ⚙️</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                <Card>
                    <h3>Users</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900 }}>1,234</p>
                </Card>
                <Card>
                    <h3>Active Now</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-green)' }}>56</p>
                </Card>
                <Card>
                    <h3>Courses</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900 }}>12</p>
                </Card>
                <Card>
                    <h3>Revenue</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-yellow)' }}>$5k</p>
                </Card>
            </div>
        </div>
    );
}
