import React from 'react';
import Restaurant from './Restaurants';
import Card from './Card';
import SmallCard from './SmallCard';

function List() {
  return (
    <div className='flex flex-wrap justify-center gap-10 md:gap-24 mx-4 md:mx-10'>
      {Restaurant.map((restaurant, idx) => (
        <>
        <div className='hidden md:block'>
        <Card
          key={idx} 
          discount={restaurant.discount} 
          name={restaurant.name} 
          category={restaurant.category} 
          image={restaurant.image} 
        />
        </div>
        <div className='md:hidden block'>
        <SmallCard
        key={idx} 
        discount={restaurant.discount} 
        name={restaurant.name} 
        category={restaurant.category} 
        image={restaurant.image}
        />
        </div>
        </>
      ))}
    </div>
  );
}

export default List;
