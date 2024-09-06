import React from 'react'

const VideosGallery = () => {
    return (

        <>
            <div>
                <div className='container text-center text-warning my-3'><h2>Shikh Images Videos</h2></div>
                <div className='container'>
                    <div id="carouselExampleIntervalrrr" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="card-group">
                                    <div class="card mx-2 mx-3">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/V7_11rGt7yM?si=09igXzO_kGjkCTjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                                    </div>
                                    <div class="card">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/7tTnzuO_xyE?si=xYO9LJQl6Ox1iFOu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    </div>
                                    <div class="card mx-2">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/7tTnzuO_xyE?si=xYO9LJQl6Ox1iFOu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="card-group">
                                    <div class="card">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/V7_11rGt7yM?si=09igXzO_kGjkCTjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                                    </div>
                                    <div class="card mx-2">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/V7_11rGt7yM?si=09igXzO_kGjkCTjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    </div>
                                    <div class="card mx-2">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/V7_11rGt7yM?si=09igXzO_kGjkCTjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-group">
                                    <div class="card mx-2">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/-O9oyXT9yMo?si=g_5iT3pcf2W70WAJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                                    </div>
                                    <div class="card mx-2">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/V7_11rGt7yM?si=09igXzO_kGjkCTjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    </div>
                                    <div class="card mx-2">
                                        <iframe className='mx-3' width="560" height="315" src="https://www.youtube.com/embed/tSp_L7vd7YQ?si=k2nUIHyjWW__Tl9C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIntervalrrr" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIntervalrrr" data-bs-slide="next">
                            <span class="carousel-control-next-icon warning" aria-hidden="true"></span>
                            <span class="visually-hidden ">Next</span>
                        </button>
                    </div>
                </div></div>
        </>

    )
}

export default VideosGallery