import React from 'react';
import './portfolio.css'
const PortfolioPage = () => {
  const name = 'Kingsley Okpo';
  const message = `
  As a passionate software engineer and mathematician, I thrive on the exhilarating intersection of logic and creativity. With a solid foundation in mathematics, I approach software development as an elegant puzzle that demands both analytical thinking and innovative solutions. My journey into this field began with my fascination for algorithms and patterns, which eventually led me to pursue degrees in both mathematics and computer science.

Throughout my career, I've had the privilege of working on diverse projects that have sharpened my skills in various technologies. From crafting efficient algorithms to developing user-friendly interfaces, I'm committed to creating robust software solutions that marry precision with practicality. The ever-evolving landscape of technology exhilarates me, and I'm constantly driven to learn new languages, frameworks, and paradigms to stay at the forefront of innovation.

In addition to my technical pursuits, I believe in effective communication and collaboration as essential pillars of successful software engineering. My experience collaborating with cross-functional teams has taught me the value of combining technical expertise with clear communication to deliver exceptional results.

When I'm not immersed in code, you'll find me exploring the world of abstract mathematics, finding beauty in elegant theorems and proofs. This love for both software engineering and mathematics fuels my determination to tackle complex challenges and contribute meaningfully to the world of technology.

Feel free to customize and expand upon this text to reflect your personal experiences and accomplishments accurately.
`
  const videoUrl = 'https://www.youtube.com/embed/your-video-id';
  const cvUrl = 'link-to-your-cv';
  const projectPdfUrl = 'link-to-your-project-pdf';

  const handleScrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='portfolio'>
      <main style={{ padding: '20px' }}>
        <section>
        <div className="col-right">
                <h3 className="portfols">PORTFOlIO</h3>
                <a href=''></a>
                <h1 className='section-title'>STUDY BUDDY</h1>
                <p>
                Studybuddy is a mobile application that provides
                 quality learning to junior secondary school students.
                  It offers a variety of features that are tailored to 
                  each student's individual needs, including 
                  interactive lessons, a personalized learning dashboard, and a community of students and teachers who can offer support and encouragement.
Studybuddy is the perfect way for junior secondary school students to 
get the support they need to succeed in school. It is easy to use and fun, 
and it can help students learn more effectively.

                </p>
                <p>{}</p>
                    
            </div>
        </section>
        <section id="video-section" style={{ marginBottom: '40px' }}>

          
          <h1 className='section-title'>PITCH VIDEO</h1>
          <div className='video_container'>
            <iframe src="https://www.youtube.com/embed/jJPmhXbgqpo" 
            title="18 July 2023" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen>
            </iframe>
            
          </div>
        </section>

        <section id="downloads-section" style={{ marginBottom: '40px' }}>
        <div className="">
               <h1 className='section-title'>Pitch Slides Deck</h1>
               <GoogleSlides />
           </div>
           <h1 className='portfols'>Contributors :</h1>
           
            <a>Daniel </a>
            <a>Phebean Adeniji</a>
            <a>Kingsley Okpo</a>
           
        </section>
      </main>
      <footer style={{ padding: '20px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc' }}>
        &copy; {new Date().getFullYear()} {name}
      </footer>
    </div>
  );
};

export default PortfolioPage;
// GoogleSlides.js

const GoogleSlides = () => {
  const googleSlidesEmbedUrl = 'https://docs.google.com/presentation/d/1uzMGw-mBBkNuHwgzNz8ImnT4tE1Mjs-BYX2H86PBrwE/embed';

  return (
    <div className="google-slides-container">
      <iframe
        src={googleSlidesEmbedUrl}
        title="Pitch Slides Deck"
        allowFullScreen
      ></iframe>
    </div>
  );
};

