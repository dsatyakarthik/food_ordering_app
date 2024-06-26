import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/router";
import { reset } from "@/redux/cartSlice";
import OrderDetail from "@/components/OrderDetail";
import axios from "axios";



const Cart = () => {
   
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)

  const [open,setOpen]=useState(false)
  const [cash,setCash]=useState(false)

  const router = useRouter();


  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
        
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.container}>
    
    <div className={styles.left}>
        <table className={styles.table}>
          <thead>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </thead>

          <tbody>
          {cart.products.map((product)=>(

          
          <tr className={styles.tr} key={product._id}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={product.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {product.extras.map(extra=>(
                  <span key={extra._id}>{extra.text}, </span>
                ))}
              </span>
            </td>
            <td>
              <span className={styles.price}>${product.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quant}</span>
            </td>
            <td>
              <span className={styles.total}>${product.price*product.quant}</span>
            </td>
          </tr>

))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>

          {open?(
            <div className={styles.paymentMethods}>
              <button onClick={()=>setCash(true)}
              className={styles.payButton}>CASH ON DELIVERY</button>
              
          </div>

          ):(
          <button onClick={()=>setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>
        )}
           
          

        </div>
      
    </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;