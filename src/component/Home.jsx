import React from 'react'
import HomeContainer from '../containers/HomeContainer';
function Home() {
    return (
        <>
         <div className='add-to-cart'>
               <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="pic loading"/>
         </div>
            <HomeContainer />
            <h1>Home Container</h1>
            <div className='Cart-Wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://www.mantraman.in/wp-content/uploads/2022/02/realme-Narzo-20-Pro-Black-Ninja-6-GB-64-GB.jpeg" alt="Pic Lodaing" />
                </div>
                <div className='text-wrapper item'>
                    <span>Iphone</span>
                    <span>price:$1000.00</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to card</button>
                </div>
            </div>
        </>
    )
}

export default Home;