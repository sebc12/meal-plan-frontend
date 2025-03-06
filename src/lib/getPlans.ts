import { Plan } from '../types/index';

export async function getPlans(): Promise<Plan[]> {
    const res = await fetch(`http://127.0.0.1:8000/api/plans`, {
        cache: 'no-store' // Ingen caching for friske data
    });

    if (!res.ok) {
        throw new Error("Failed to fetch plans");
    }

    return res.json();
}