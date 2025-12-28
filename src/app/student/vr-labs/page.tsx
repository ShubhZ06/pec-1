import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function VRLabsPage() {
    return (
        <div style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ marginBottom: '24px', fontSize: '2rem', fontWeight: 800 }}>Disaster Sims 🥽</h1>
            <Card style={{ flex: 1, background: '#1B1D21', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Earthquake Simulator</h2>
                    <p style={{ color: '#808191', marginBottom: '32px' }}>Experience a magnitude 6.0 tremor safely. Practice 'Drop, Cover, Hold On'.</p>
                    <Button size="lg" style={{ background: '#3F8CFF', color: 'white', border: 'none' }}>Launch 3D Simulation</Button>
                </div>

                {/* Background Grid Effect */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(rgba(255, 117, 76, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 117, 76, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg)',
                    transformOrigin: '50% 100%',
                    opacity: 0.5
                }}></div>
            </Card>
        </div>
    );
}
