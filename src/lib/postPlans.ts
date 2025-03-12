export async function postPlans(planData: any) {
    const res = await fetch("http://127.0.0.1:8000/api/plans", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(planData),
    });

    if (!res.ok) {
        throw new Error("Failed to create plan");
    }

    return res.json();
}
