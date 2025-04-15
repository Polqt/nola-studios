import Link from "next/link";



export default function Header() {
    return (
        <div className="flex flex-row justify-center items-center mb-4">
            <h1 className="font-bold text-4xl">nola</h1>
            <ul className="flex gap-6 mt-2 text-lg font-semibold">
                <li>
                    <Link href={'/'} className="">home</Link>
                </li>
                 <li>
                    <Link href={'/about'} className="">about</Link>
                </li>
                <li>
                    <Link href={'/works'} className="">works</Link>
                </li>
                <li>
                    <Link href={'/contacts'} className="">contact us</Link>
                </li>
            </ul>
        </div>
    )
    
}