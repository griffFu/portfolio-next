import {useState,React} from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub, AiOutlineMail} from 'react-icons/Ai'

function Main() {
  //hover states Linked
  const [isHoveringL, setIsHoveredL] = useState(false);
  const onMouseEnterL = () => setIsHoveredL(true);
  const onMouseLeaveL = () => setIsHoveredL(false);
  //hover states github
  const [isHoveringG, setIsHoveredG] = useState(false);
  const onMouseEnterG = () => setIsHoveredG(true);
  const onMouseLeaveG = () => setIsHoveredG(false);

  let linkedUrl = 'https://www.linkedin.com/in/griffin-fulton-659470208/';
  let gitUrl = 'https://github.com/griffFu';
  


  return (
    <div className="h-screen w-full text-center z-auto">
      <div className="mx-auto max-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
          
          <h1>
            I'm Griffin
          </h1>
          <h1 className='text-green-900'>
            <span className="text-green-900"> a full-stack developer</span>
          </h1>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Link and build?
          </p>
          <div className='flex justify-between items-center py-5 m-auto max-w-[50%]'>
            <div className='fill-green-900 rounded-full shadow-lg shadow-gray-600 p-3 sm:p-5 cursor-pointer hover:scale-110'
            onMouseEnter={onMouseEnterG} 
            onMouseLeave={onMouseLeaveG}>
            <AiFillGithub className= {isHoveringG ? 'fill-green-900':''} size={24} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-600 p-3 sm:p-5 cursor-pointer hover:scale-110' 
              onMouseEnter={onMouseEnterL} onMouseLeave={onMouseLeaveL}>
            <FaLinkedinIn href='https://www.linkedin.com/in/griffin-fulton-659470208' className={isHoveringL ? 'fill-blue-600':''} size={24}/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-600 p-3 sm:p-5 cursor-pointer hover:scale-110'>
            <AiOutlineMail size={24}/>
            </div>
          
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Main
