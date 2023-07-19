import Link from "next/link"

export default function Navbar() {
      return (
      <>
      <ul>
            <li>
                  <Link href = "/"><i className="fa-solid fa-code"></i> proPianist1124</Link>
            </li>
            <li>
                  <Link href = "/gallery">Gallery</Link>
	      </li>
	      <li>
                  <Link href = "/contact">Contact</Link>
	      </li>
	      <li>
                  <Link href = "/blog">Blog</Link>
	      </li>
      </ul>
      </>
      )
}