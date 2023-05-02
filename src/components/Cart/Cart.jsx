import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"

const Cart = () => {
    const data = [
        {
            id: 2,
            img: "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            desc: "loremad saf adsfdsggh fgj fhj jhgflhjölh fd sad fdsdg sfg fdsg fdg hdsf sg dsg ssdg sdg sg dfg hgj kgjkghk j",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Skirt",
            desc: "loremad saf adsfdsggh fgj fhj jhgflhjölh fd sad fdsdg  sfg fdsg fdg hdsf sg dsg ssdg sdg sg dfg hgj kgjkghk j",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
        <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart