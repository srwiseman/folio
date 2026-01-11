import Link from 'next/link'
import SplitHero from '../components/SplitHero'
import screenshot from '../assets/screenshot1.png'
import screenshot2 from '../assets/screenshot2.png'
import secondScreenshot from '../assets/screenshot2.png'

export default function Triplix() {
  return (
    <>
    <SplitHero title="Triplix" subheadline='A Number Puzzle Game'>
      <div className='triplix-text'>
  <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <img
            src={screenshot.src}
            alt="Triplix Screenshot 1"
            className="rounded-3xl shadow-lg max-h-[70vh] w-auto max-w-full md:max-w-[48%] mx-auto border-6 border-black"
          />
          <img
            src={screenshot2.src}
            alt="Triplix Screenshot 2"
            className="rounded-3xl shadow-lg max-h-[70vh] w-auto max-w-full md:max-w-[48%] mx-auto border-6 border-black"
          />
        </div>
      </div>
    </SplitHero>
  <section id="contact" className="min-h-[50vh] flex items-center justify-center bg-gray-50 py-12">
      <div className="max-w-3xl w-full text-center p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">Have questions or want to collaborate on Triplix? Send me a message and I'll get back to you.</p>
        <a href="mailto:swiseman@gmail.com" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Email me</a>
      </div>
    </section>
    </>
  )
}
