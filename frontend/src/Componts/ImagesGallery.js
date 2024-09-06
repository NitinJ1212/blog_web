import React from 'react'

const ImagesGallery = () => {
  return (

    <>
    <div>
    <div className='container text-center text-warning my-3'><h2>Shikh Images Gallery</h2></div>
    <div className='container'>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div class="card-group">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    
   
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    
    
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
  
   
  </div>
</div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div class="card-group">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    
    
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    
    
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    
   
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="card-group">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    
    
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
   
   
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
   
    
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon warning" aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>
    </div></div>
    </>
    
  )
}

export default ImagesGallery