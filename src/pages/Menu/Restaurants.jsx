import React from 'react'
import RestaurantList from '../../modules/restaurants/RestaurantList'
import Main from '../../layouts/Main'
import NewRestaurants from '../../modules/restaurants/NewRestaurants'
import SearchBox from '../../components/SearchBox/SearchBox'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import PropsSearchBox from '../../components/SearchBox/PropsSearchBox'

const Restaurants = () => {
  return (
    <div>
      <Main>
        <div className='flex justify-between items-center  mx-6 mt-5'>
            <PropsSearchBox className="text-sm" placeholder="Search Restaurant name, id, menu, item"/>
            <button className='bg-orange-500 text-xs text-white rounded-md pl-7 pr-3 py-2'>+  ADD ITEM</button>
        </div>
        <div>
            <NewRestaurants />
        </div>
        <div>
            <RestaurantList />
        </div>
      </Main>
    </div>
  )
}

export default Restaurants
