
import React from 'react'
import './Css/shopCategory.css'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function ShopCategory(props) {
 
  const products  = useSelector((state) => state.products.items )


  return (
    <div className='shop_catogory flex'>

      <img className='banner ' src={props.banner} alt="" />


      <div className="shopCategory_index flex ">

        <p>
          <span>
            showing 1-12
          </span>
          out of 36 products
        </p>


      </div>

      <div className="shopCategory_Products  flex" >
        <AnimatePresence>
          {
            products.map((item) => {


              if (item.category === props.category_item) {

                return <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}

                  key={item.id} className="card  ">

                  <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt="nn" style={{ borderRadius: '5px', width: '100%' }} />
                  </Link>

                  <div className="box flex ">
                    <h1 className='title flex '>{item.category}</h1>

                    <div className="proces_info  ">
                      <p className='sub_title  '>{item.name}</p>
                      <p className='price '>Old Price  {item.old_price}</p>
                      <p className='price '>New Price  {item.new_price}</p>
                    </div>

                  </div>
                </motion.article>
              }

              else {
                return null
              }



            })
          }
        </AnimatePresence>

      </div>





    </div>
  )
}

