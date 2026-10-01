import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { LimeSquiggle, WhiteSquiggle } from '../common/Shapes'

export default function CTASection() {
  return (
    <section className="bg-[#003BE2] bg-grid-lines bg-grid text-white text-center py-20 relative overflow-hidden">
      <LimeSquiggle style={{ left: 0, top: 20, width: 170 }} />
      <WhiteSquiggle style={{ right: '2%', top: 30, width: 130 }} />
      <span className="absolute z-[2] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[46px] border-b-white left-[8%] bottom-5" />
      <div className="max-w-[1440px] mx-auto px-10 relative z-[3]">
        <h2 className="text-5xl font-extrabold leading-tight">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="text-[2xl] opacity-85 max-w-[964px] text-center mx-auto my-4 leading-loose">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button as={Link} to="/signup" 
        className='rounded-full'
        >
          Join as Creator
        </Button>
      </div>
    </section>
  )
}
