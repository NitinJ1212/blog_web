import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
const HomePageCard = ({ data }) => {
  console.log(data, "dddddddddddddddddddd")

  return (

    <>
      <div className='text-warning text-center'><h2>Lastest Bolgs</h2></div>
      <div className='container mb-4'>
        <div className='row'>
          {data && data?.map(v => (
            <div class="card col-md-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">"title"</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted"><Link
                  to="#"
                >
                  Read More
                </Link></small>
              </div>
            </div>
          ))}
        </div>

        <div class="card-group">
          <div class="card mx-2">
            <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><Link
                to="#"
              >
                Read More
              </Link></small>
            </div>
          </div>
          <div class="card mx-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><Link
                to="#"

              >
                Read More
              </Link></small>
            </div>
          </div>
        </div>
        <div className='text-warning text-center my-4'><h2>Trandin Bolgs</h2></div>

        <div class="card-group">
          <div class="card mx-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><Link
                to="#"

              >
                Read More
              </Link></small>
            </div>
          </div>
          <div class="card mx-2">
            <img src="https://c8.alamy.com/comp/A5AH6K/sikh-troops-dividing-the-spoils-taken-from-mutineers-during-the-indian-A5AH6K.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><Link
                to="#"

              >
                Read More
              </Link></small>
            </div>
          </div>
          <div class="card mx-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXWHp9mUOfHIjwtKi9Y5z8G7bkMBTlrmr8Q&s" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><Link
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

export default HomePageCard