import React from 'react'

function Slider() {
  return (

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style={{ height: "370px" }}>
      <div class="carousel-inner home_banner">
        <div class="carousel-item active home_banner">
          <img src="https://www.sikhmuseum.com/nishan/empire/large/empire_31.jpg" class="d-block w-100 home_banner" alt="..." height="450px" />
        </div>
        <div class="carousel-item home_banner">
          <img src="https://media.gettyimages.com/id/152190259/photo/the-first-anglo-sikh-war-was-fought-between-the-sikh-empire-and-the-british-east-india-company.jpg?s=612x612&w=gi&k=20&c=5NNWRFalT1mB4Yf--veFnBg9S_53l7P15iwdJcsOgHg=" class="d-block w-100 home_banner" alt="..." height="450px" />
        </div>
        <div class="carousel-item home_banner">
          <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_3888,h_2916/https://www.sikhiart.com/wp-content/uploads/2018/11/Baba-Deep-Singh-ji-on-Horse-Riding-to-Battle-by-Bhagat-Singh-Bedi-Sikhi-Art.jpg" class="d-block w-100 home_banner" alt="..." height="450px" />
        </div>
      </div>
    </div>

  )
}

export default Slider