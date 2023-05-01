import React from "react";
import "./List.scss";
import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
//       (item) => `&[filters][sub_categories][id][$eq]=${item}`
//     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
//   );

const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/16479557/pexels-photo-16479557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/16479557/pexels-photo-16479557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Skirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Hat",
        isNew: true,
        oldPrice: 19,
        price: 12
    }
]

  return (
    <div className="list">
      {/* {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)} */}
        {data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;