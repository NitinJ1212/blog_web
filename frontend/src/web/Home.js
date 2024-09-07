import React from 'react'
import Slider from '../Componts/Slider'
import HomePageCard from '../Componts/HomePageCard'
import ImagesGallery from '../Componts/ImagesGallery'
import VideosGallery from '../Componts/VideosGallery'

const Home = () => {
  return (
    <>

      <div className='mb-4'>


        <Slider className="my-4" />
        <marquee class="blink">The Sikh history is a rich tapestry of spiritual, cultural, and socio-political evolution that began in the Punjab region of South Asia over five centuries ago. Founded in the 15th century by Guru Nanak Dev Ji, Sikhism emerged as a monotheistic religion advocating for equality, justice, and selfless service to humanity. It challenged the prevailing social inequalities and religious orthodoxy of the time, offering a path of devotion and righteousness. The subsequent nine Sikh Gurus further developed the teachings and the community, emphasizing the principles of humility, bravery, and faith. Under the leadership of the tenth Guru, Guru Gobind Singh Ji, the Khalsa Panth was established in 1699, formalizing the spiritual and martial code for Sikhs, emphasizing both saintly conduct and warrior spirit. Throughout its history, Sikhs have demonstrated resilience and courage, defending their faith and values against oppression while contributing significantly to the cultural and social landscape of India. Today, Sikhism is the world's fifth-largest religion, with millions of adherents around the globe who continue to uphold the ideals of their Gurus.<h1 className='text-center my-4'>
        </h1></marquee>


        <HomePageCard />
        <ImagesGallery />
        <VideosGallery />
      </div>
    </>
  )
}

export default Home