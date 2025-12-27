import Card from "@/components/ui/Card";

export default function TeacherDashboard() {
    return (
        <div>
            <h1 style={{ marginBottom: '32px', fontSize: '2rem', fontWeight: 800 }}>Teacher Dashboard 👩‍🏫</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <Card>
                    <h3>Total Students</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>32</p>
                </Card>
                <Card>
                    <h3>Assignments Due</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-pink)' }}>5</p>
                </Card>
                <Card>
                    <h3>Average Score</h3>
                    <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-green)' }}>88%</p>
                </Card>
            </div>
        </div>
    );
}
