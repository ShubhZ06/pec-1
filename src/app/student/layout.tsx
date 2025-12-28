import Navbar from "@/components/layout/Navbar";

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <Navbar />
                <main style={{ paddingBottom: '2rem' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
