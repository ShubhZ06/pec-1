"use client";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const COURSES = [
    { id: 1, title: 'Math Adventure', level: 'Grade 3', progress: 80, color: '#FFA2C0' },
    { id: 2, title: 'Science Explorer', level: 'Grade 3', progress: 45, color: '#7FBA7A' },
    { id: 3, title: 'Art & Design', level: 'Beginner', progress: 10, color: '#3F8CFF' },
    { id: 4, title: 'Space History', level: 'Grade 4', progress: 0, color: '#FFCE73' },
];

export default function CoursesPage() {
    return (
        <div>
            <h1 style={{ marginBottom: '24px', fontSize: '2rem', fontWeight: 800 }}>My Courses 📚</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                {COURSES.map(course => (
                    <Card key={course.id}>
                        <div style={{ height: '120px', background: course.color, borderRadius: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                            {course.title[0]}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>{course.title}</h3>
                        <p style={{ color: '#808191', marginBottom: '16px' }}>{course.level}</p>
                        <div style={{ background: '#F4F5F7', height: '8px', borderRadius: '4px', marginBottom: '16px', overflow: 'hidden' }}>
                            <div style={{ width: `${course.progress}%`, background: course.color, height: '100%' }}></div>
                        </div>
                        <Button variant="outline" size="sm" style={{ width: '100%' }}>
                            {course.progress > 0 ? 'Continue' : 'Start'}
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}
