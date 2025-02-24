import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Front from '../../components/front/front'
import Particles from '../../components/particles'
import banner from '../../assets/banner.jpg'

function Home() {
  return (
    <div
      style={{
        position: 'relative', 
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1 
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%',
        maxWidth: '100vw'}}>
        <Navbar/>
        <Front/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home