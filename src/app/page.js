'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Main() {
const router = useRouter();
    return (
        <>
            <div>THIS IS MAIN PAGE</div>
            <Link href="/about">
                <span className="bg-amber-600 rounded px-4 py-2 ms-4 text-green-950">About us</span>
            </Link>
            <button
                className="bg-amber-400 rounded px-4 py-2 ms-4 text-green-950"
                type="button"
                onClick={() => router.push('/products')}
            >Products</button>
        </>
    );
}