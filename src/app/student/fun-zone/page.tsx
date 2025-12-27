import Card from "@/components/ui/Card";

export default function FunZonePage() {
    return (
        <div>
            <h1 style={{ marginBottom: '24px', fontSize: '2rem', fontWeight: 800 }}>Fun Zone 🎮</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                <Card className="game-card" style={{ background: '#FF754C', color: 'white', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🧩</div>
                        <h2>Puzzle Master</h2>
                        <p>Solve tricky puzzles!</p>
                    </div>
                </Card>
                <Card className="game-card" style={{ background: '#6C5DD3', color: 'white', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🚀</div>
                        <h2>Space Dash</h2>
                        <p>Race through the stars!</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
