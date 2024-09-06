import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { allblog } from '../api/webapi';

const Bolg = () => {
  var token = localStorage.getItem("token")
  const id="23456y7"
  console.log(token);
  const [data,setdata]=useState()
  
  useEffect(()=>{
    
      allblog().then((res)=>setdata(res?.allblog[0]?.desscription))
    },[])

  return (
  <>
  <div className='container'>
  <marquee class="blink">The Sikh history is a rich tapestry of spiritual, cultural, and socio-political evolution that began in the Punjab region of South Asia over five centuries ago. Founded in the 15th century by Guru Nanak Dev Ji, Sikhism emerged as a monotheistic religion advocating for equality, justice, and selfless service to humanity. It challenged the prevailing social inequalities and religious orthodoxy of the time, offering a path of devotion and righteousness. The subsequent nine Sikh Gurus further developed the teachings and the community, emphasizing the principles of humility, bravery, and faith. Under the leadership of the tenth Guru, Guru Gobind Singh Ji, the Khalsa Panth was established in 1699, formalizing the spiritual and martial code for Sikhs, emphasizing both saintly conduct and warrior spirit. Throughout its history, Sikhs have demonstrated resilience and courage, defending their faith and values against oppression while contributing significantly to the cultural and social landscape of India. Today, Sikhism is the world's fifth-largest religion, with millions of adherents around the globe who continue to uphold the ideals of their Gurus.<h1 className='text-center my-4'>
  </h1></marquee>
  <div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
     <Link 
              to="#" 
           
            >
             Read More
            </Link>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>
<div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>

<div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>
<div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>
<div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>
<div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>
<div class="card-group my-3">
  <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
  <div class="card mx-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"> <Link 
              to="#" 
           
            >
             Read More
            </Link></small>
    </div>
  </div>
</div>
</div>
  </>
  )
}

export default Bolg