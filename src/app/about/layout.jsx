import Link from "next/link";

export const metadata = {
    title: "About Page",
    description: "It Is A Description pAge",
  };

export default function AboutLayout({
    children
}) {
    return(
        <>
        Jisu Abour
        <ul className='aboutrouting'>
                
                <li>
                    <Link href='/about/aboutus'>About Us</Link>
                </li>
                <li>
                    <Link href='/about/ustarget'>Us Target</Link>
                </li>
                <li>
                    <Link href='/about/usview'>Us View</Link>
                </li>
            </ul>
            {children}</>
            
        
    )
}