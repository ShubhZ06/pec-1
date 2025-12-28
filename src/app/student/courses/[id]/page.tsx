"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data (duplicated for simplicity)
// Mock data (duplicated for simplicity)
const MODULES = [
    { id: 1, title: 'Earthquake 101', level: 'Basic', description: 'Learn the fundamentals of earthquake safety, including the "Drop, Cover, and Hold On" technique. This module covers pre-disaster planning, what to do during shaking, and post-event safety checks.', color: '#FFA2C0', videoSrc: '/earthquake_poem.mp4' },
    { id: 2, title: 'Fire Safety', level: 'Intermediate', description: 'Master fire prevention and evacuation strategies. Understand different types of fires, how to use an extinguisher correctly, and the importance of smoke alarms.', color: '#7FBA7A', videoSrc: '/earthquake_poem.mp4' },
    { id: 3, title: 'First Aid Kit', level: 'Essential', description: 'Essential first aid skills for emergencies. Learn how to assemble a kit, treat minor injuries, and perform basic life support until help arrives.', color: '#3F8CFF', videoSrc: '/earthquake_poem.mp4' },
    { id: 4, title: 'Flood Response', level: 'Advanced', description: 'Advanced strategies for flood scenarios. Includes route planning, emergency kit preparation, and maintaining communication during high-water events.', color: '#FFCE73', videoSrc: '/Flood_poem.mp4' },
];

export default function ModuleDetailsPage() {
    const params = useParams();
    const id = Number(params?.id);
    const module = MODULES.find(m => m.id === id);

    if (!module) {
        return <div>Module not found</div>;
    }

    return (
        <div style={{ paddingBottom: '40px' }}>
            <div style={{ marginBottom: '24px' }}>
                <Link href="/student/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#808191', marginBottom: '16px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Back to Modules</span>
                </Link>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>{module.title}</h1>
                <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    background: module.color,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.875rem'
                }}>
                    {module.level}
                </span>
            </div>

            <div style={{
                background: '#000',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                marginBottom: '32px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
                <video
                    key={module.videoSrc} // Force re-render on video change
                    src={module.videoSrc}
                    controls
                    autoPlay
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>About this Module</h2>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#444' }}>
                        {module.description}
                    </p>
                </div>

                <div style={{
                    background: '#fff',
                    padding: '24px',
                    borderRadius: '24px',
                    border: '1px solid #eee',
                    height: 'fit-content'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>Module Progress</h3>
                    <div style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                            <span>Completion</span>
                            <span>0%</span>
                        </div>
                        <div style={{ background: '#F4F5F7', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
                            <div style={{ width: '0%', background: module.color, height: '100%' }}></div>
                        </div>
                    </div>
                    <Button variant="primary" style={{ width: '100%' }}>
                        Mark as Complete
                    </Button>
                </div>
            </div>
        </div>
    );
}
