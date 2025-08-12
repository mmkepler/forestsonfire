import React from 'react'
import Image from 'next/image'
const forest1 = "/img/forest-fire-424396_1280.jpg"
const forest2 = "/img/fire-5457829_1280.jpg"

export default function about() {
  return (
    <section className="p-40">
      <h1>About</h1>
 
      <article className="container">
        <div className="flex flex-col justify-center items-center">
          <Image width={120} height={170}src={forest1} alt=""/>
          <p>Years ago there were forest fires in the area I lived in in Georgia. 
            My neighbors and I kept up to date with the news and luckily the fires never reached area. 
            But during that time I drove to see a family member and had to drive through an area that was smoldering.
            The road was open, so the authorities didn't think it was dangerous, but it looked terrifying. 
            Smoke was thick in the air, you couldn't put the windows down. 
            Trees on both sides of the road were black with lines of gray ash and flame still peeking out from below. 
            Embers were flying in the air. It was the spookiest thing I ever saw.  </p>
            <br/>
          </div>
          <h3>Ember Brands</h3>
           <div className="flex flex-col justify-center items-center">
            <Image width={120} height={170} src={forest2} alt=""/>
            <p>Years later, one of my best friends is working as the program director for the Santa Clara Firesefe Council. 
              One morning she mentioned she just did an interview for a San Francisco area television station. 
              I watched the video and she said a phrase: "ember brands". 
              It struck me that there are all these terms used that your average person doesn't understand. 
              Now that goverment funding has been seriously cut from many programs, public knowlege of information about forests fires could be more important than ever. 
              It might make the difference between saving thier homes, or saving thier lives</p>
            </div>
      </article>
    </section>
  )
}
