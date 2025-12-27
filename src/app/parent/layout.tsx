import Sidebar from "@/components/layout/Sidebar";

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <Sidebar role="parent" />
            <div style={{ marginLeft: '260px', flex: 1, padding: '32px' }}>
                {children}
            </div>
        </div>
    );
}
