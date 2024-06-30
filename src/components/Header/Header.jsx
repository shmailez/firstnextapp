import Link from "next/link";

export default function Header() {
    return(
        <header className='header'>
        <Link className='link' href='/'>Home</Link>
        <Link className='link' href='/about'>About</Link>
        <Link className='link' href='/contacts'>Comtacts</Link>
        <Link className='link' href='/blog'>BLOG</Link>
        </header>
    )
}