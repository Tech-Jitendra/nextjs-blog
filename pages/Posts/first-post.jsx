import Link from "next/link"

export default function FirstPost() {
    return (
        <>
            <h1>Jitendra my name First Post</h1>
            <h2 style={{color:'red'}}>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}