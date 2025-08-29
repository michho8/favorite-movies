'use client'

import { useEffect, useState } from "react";

export default function FunFactClient({ movie }: { movie: string }) {
    const [fact, setFact] = useState<string>("Grabbing a fun fact...");

    useEffect(() => {
        const go = async () => {
            const res = await fetch(`/api/funfact?movie=${encodeURIComponent(movie)}`, { cache: "no-store" });
            const data = await res.json();
            setFact(data.fact);
        }
        go();
    }, [movie])

    return <p><strong>Fun Fact:</strong> {fact}</p>
}
