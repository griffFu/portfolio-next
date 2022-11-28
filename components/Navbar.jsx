import Image from 'next/image'
import Link from 'next/link'
import { useState, React } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)

  function changeView() {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo3.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className={nav ? 'hidden ' : 'hidden md:flex'}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={changeView} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : ' fixed left-[-100%] top-[-100%]'
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Image
                src="/../public/assets/logo3.png"
                alt="/"
                height="100"
                width="100"
              ></Image>
              <div
                className="shadow-xl rounded-full shadow-gray-400 p-3 cursor-pointer"
                onClick={changeView}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div>
              <p className="uppercase py-10">Lets Link and Build</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
