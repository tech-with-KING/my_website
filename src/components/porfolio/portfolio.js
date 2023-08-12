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
      <header className='header_file'>
        <h1>{name}'s Portfolio</h1>
      </header>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <button onClick={() => handleScrollTo('video-section')}>Pitch Video</button>
        <button onClick={() => handleScrollTo('downloads-section')}>Downloads</button>
      </nav>
      <main style={{ padding: '20px' }}>
        <section id="video-section" style={{ marginBottom: '40px' }}>
          <h2>hello world</h2>
          <p>{message}</p>
          <h2>My Pitch Video</h2>
          <div className='video_container'>
            <iframe src="https://www.youtube.com/embed/jJPmhXbgqpo" 
            title="18 July 2023" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
        </section>
        <section id="downloads-section" style={{ marginBottom: '40px' }}>
          <h2>Downloads</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href={cvUrl}
              download
              style={{ marginRight: '20px', padding: '10px 20px', backgroundColor: '#3498db', color: 'white' }}
            >
              Download CV
            </a>
            <a
              href={projectPdfUrl}
              download
              style={{ padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white' }}
            >
              Download Project PDF
            </a>
          </div>
        </section>
        {/* Add more sections for projects, skills, etc. */ message}
      </main>
      <footer style={{ padding: '20px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc' }}>
        &copy; {new Date().getFullYear()} {name}
      </footer>
    </div>
  );
};

export default PortfolioPage;
