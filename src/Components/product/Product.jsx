import React from 'react'
import farmer from '../../assets/utilities/veg.png'
import store from '../../assets/icons/store.svg'
import storelogo from '../../assets/icons/pasang.jpeg'
import rating from '../../assets/ratings/rating-0.png'
import rating1 from '../../assets/ratings/rating-05.png'
import rating2 from '../../assets/ratings/rating-10.png'
import { Link } from 'react-router-dom';
import onestar from '../../assets/ratings/onestar.svg'
import location from '../../assets/icons/location.svg'
import nwarranty from '../../assets/icons/nwarranty.svg'
import chat from '../../assets/icons/chat.svg'

const Product = () => {
  return (
    <>
       <div className="body">
           <div className="product_container w-full min-h-screen bg-[#ffffff]  flex flex-col md:bg-gray-300">

               <div className="left flex-col  md:flex md:flex-row md:bg-white md:w-[95%] md:mx-auto md:gap-10 md:justify-between ">
  
                  <div className="product_img_container md:w-1/3 md:flex items-center justify-center ">
                     <img
                        className="border-b border-gray-300 w-full   md:mx-10  md:max-w-md md:border-0 object-contain"
                        src={farmer}
                        alt=""
                     />
                  </div>

               
                  <div className="flex flex-col justify-start  w-full  md:w-1/3 md:items-start ">

              
                     <div className="product_name pl-3">
                        <p className="text-xl font-bold pt-4 md:text-2xl md:pt-[15%]">
                        Green Cabbage (Brassica oleracea var. capitata)
                        </p>
                     </div>

               
                     <div className="prices pl-3 pt-1 flex items-center gap-2 md:my-8 md:block md:border-b md:border-b-gray-200 md:pb-8 w-full">
                        <span className="text-[#057E0D] text-xl md:text-2xl">Rs.</span>
                        <span className="text-[#057E0D] text-2xl md:text-3xl">100</span>
                     </div>

                
                     <div className="quantity hidden md:flex font-bold  items-center gap-6 pl-3 md:mt-30">
                        <span className="opacity-60 text-xl">Quantity</span>
                        <div className="increase_quantity flex items-center gap-6">
                           <div className="addition w-8 h-8 bg-gray-200 flex items-center justify-center  cursor-pointer opacity-70 text-2xl">-</div>
                           <div className="addition_logo text-xl">1</div>
                           <div className="subtraction w-8 h-8 bg-gray-200 flex items-center justify-center  cursor-pointer opacity-70 text-2xl">+</div>
                        </div>
                     </div>

                     
                     <div className="bigscreen_price hidden md:flex gap-4 pl-3 md:mt-8">
                        <button className="px-6 py-3 bg-[#057E0D] text-white rounded-lg md:px-4 md:py-3 md:text-base cursor-pointer">Buy Now</button>
                        <button className="px-6 py-3 bg-[#057E0D] text-white rounded-lg md:px-4 md:py-3 md:text-base cursor-pointer">Add to Cart</button>
                     </div>
                  </div>
                  
                  {/* desktop delivery section */}
                  <div className="delivery_container hidden  w-1/3 md:flex flex-col bg-gray-50">  

                     <div className="delivery_option space-y-6 items-center border-b border-gray-200">
                         <div className="delivery text-xl p-4 opacity-70 font-bold">Delivery Option</div>
                         <div className="select-option flex items-center justify-between p-4">
                           <img className='w-8' src={location} alt="" />
                           <div className="select-location text-base w-2/3">Bagmati, Kathmandu Metro 22 -Newroad Area, Newroad</div>
                           <button className="change font-bold text-[#057E0D] text-base cursor-pointer">Change</button>
                         </div>
                     </div>

                     <div className="hidden md:block return-Warrenty pt-4 border-b border-b-gray-200 pb-8">
                        <div className="titile text-xl opacity-70 font-bold pl-4">Return & Warranty</div>
                        <div className="policies p-2">
                           <div className="return ">
                              <span className='font-bold text-base opacity-60 pl-2 pt-4'>Refund Eligibility</span>
                              <ul className='list-disc pl-6'>
                                 <li>Incorrect items delivered</li>
                                 <li>Damaged or spoiled products reported within the valid time window</li>
                              </ul>
                              
                           </div>
                           <div className="warrenty flex gap-4 ml-3 mt-4">
                              <span><img src={nwarranty} className='font-bold' alt="" /></span>
                              <span className='text-base'>Warranty Not Available(perishable item)</span>
                           </div>
                        </div>
                     </div>

                     <div className="go_to_shop hidden  md:flex flex-col ">

                        <div className="wrapper flex justify-between m-4 items-center">
                           <div className="top">
                             <div className="soldBy font-semibold opacity-90 text-[#057E0D]">Sold by</div>
                             <div className="store-name text-xl">Pratik Marketing</div>
                           </div>                        

                           <div className="chat flex space-x-2">
                             <span><img className='fill-[#057E0D]' src={chat} alt="" /></span>
                             <span className='text-[#057E0D]'>Chat</span>
                           </div>
                        </div>

                        <div className="bottom hidden mt-4 md:flex w-full p-2 ">
                      
                             <div className="positive-seller-rating flex flex-col justify-center items-center border border-gray-300 w-1/3 opacity-60  relative">
                               <div className="text-center">Positive Seller Ratings</div>
                               <div className="text-2xl font-bold text-center p-2">94%</div>
                             </div>
                      
                             <div className="ship-on-time flex flex-col   border border-gray-300 w-1/3 opacity-60 ">
                               <div className="text-center">Ship on Time</div>
                               <div className="text-2xl font-bold text-center pt-8">100%</div>
                             </div>
                     
                             <div className="chat-response-rate flex flex-col justify-center  border border-gray-300 w-1/3 opacity-60">
                               <div className="text-center">Chat Response Rate</div>
                               <div className="text-2xl text-center font-bold p-2">70%</div>
                             </div>
                        </div>

                        <div className="go-to-store flex items-center justify-center">
                           <div className="store-link font-semibold text-xl text-[#057E0D] p-6 cursor-pointer hover:underline hover:underline-offset-4">
                              GO TO STORE
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

              <div className="product_review flex justify-between items-center  m-4">
                <div className="review text-base font-bold ">
                    Ratings & Reviews (10)
                </div>

                <div className="rating_image">
                    <img className='w-35' src={rating} alt="" />
                </div>
              </div>

               <div className="reviews_container border-b border-gray-300">
                  <div className=" m-auto w-[95%] rounded-lg  bg-gray-100 mb-5">
                       <div className="review_rating p-3">
                         <div className="reviews">the product was great i also asdf asdfasdf asdfasdf asdfasdf adfa</div>
                         <div className="rating_name flex space-x-4 ">
                            <img className='w-25 ' src={rating1} alt="" /> 
                            <div className="name text-gray-600">pasang lama</div>
                         </div>                    
                       </div>
                   </div>
                   <div className="reviews_container  m-auto w-[95%] rounded-lg bg-gray-100 mb-5">
                       <div className="review_rating p-3">
                         <div className="reviews">it was an amazing experience to use the product</div>
                         <div className="rating_name flex space-x-4 ">
                            <img className='w-25 ' src={rating2} alt="" /> 
                            <div className="name text-gray-600">coco </div>
                         </div>                    
                       </div>
                   </div>
               </div>
               {/* more from store horizontal scroll */}

               <div className="more_from_store  w-full pt-5 bg-white p-1">
                  <div className="render_product text-xl font-bold pl-3 ">More from Store</div>

                  <div className="store_items flex space-x-1 mt-3">
                     <div className="wrapper max-w-40 rounded-lg ml-1 border border-gray-300 flex flex-col overflow-hidden">

                        <div className="s_product bg-gray-100 flex items-center justify-center">
                           <span className=''><img className='w-30 ' src={farmer} alt="" /></span>
                        </div>

                        <div className="s_price&rating">
                           <div className="product">
                              <div className="name m-3">
                                 <p>Green Cabbage (Brassica oleracea var. capitata)</p>
                              </div>
                              <div className="price m-3">
                                 <span className="text-[#057E0D] text-base">Rs.</span><span className='text-[#057E0D] text-xl'>100</span>
                              </div>
                           </div>
                           <div className="rating_container pt-2">
                           <div className="rating flex space-x-2 m-1 opacity-70">
                              <img src={onestar} className='w-5 pl-1' alt="" /> <span>({10})</span>
                           </div>
                           <div className="sold opacity-70 ml-2"> 8<span className='pl-2 text-base'>sold</span> </div>
                           </div>
                        </div>  
                     </div>

                     <div className="wrapper max-w-40  rounded-lg border border-gray-300 flex flex-col overflow-hidden">
                        <div className="s_product bg-gray-100 flex items-center justify-center">
                           <span className=''><img className='w-30 ' src={farmer} alt="" /></span>
                        </div>

                        <div className="s_price&rating">
                           <div className="product">
                              <div className="name m-3">
                                 <p>Green Cabbage (Brassica oleracea var. capitata)</p>
                              </div>
                              <div className="price m-3">
                                 <span className="text-[#057E0D] text-base">Rs.</span><span className='text-[#057E0D] text-xl'>100</span>
                              </div>
                           </div>
                           <div className="rating_container pt-2">
                              <div className="rating flex space-x-2 m-1 opacity-70">
                                 <img src={onestar} className='w-5 pl-1' alt="" /> <span>({10})</span>
                              </div>
                              <div className="sold opacity-70 ml-2"> 8<span className='pl-2 text-base'>sold</span> </div>
                           </div>
                        </div>  
                     </div>

                     <div className="wrapper max-w-40  rounded-lg border border-gray-300 flex flex-col overflow-hidden">
                        <div className="s_product bg-gray-100 flex mr-1 items-center justify-center">
                           <span className=''><img className='w-30 ' src={farmer} alt="" /></span>
                        </div>

                        <div className="s_price&rating">
                           <div className="product">
                              <div className="name m-3">
                                 <p>Green Cabbage (Brassica oleracea var. capitata)</p>
                              </div>
                              <div className="price m-3">
                                 <span className="text-[#057E0D] text-base">Rs.</span><span className='text-[#057E0D] text-xl'>100</span>
                              </div>
                           </div>
                           <div className="rating_container pt-2">
                           <div className="rating flex space-x-2 m-1 opacity-70">
                              <img src={onestar} className='w-5 pl-1' alt="" /> <span>({10})</span>
                           </div>
                           <div className="sold opacity-70 ml-2"> 8<span className='pl-2 text-base'>sold</span> </div>
                           </div>
                        </div>  
                     </div>
                  </div>
               </div>

              <div className="right mt-3">
                 <div className="product_detail pl-3">
                     <div className="detail font-bold text-xl text-gray-500">Product Details</div>
                     <ul className="list-disc">
                        <li>Product details of {` Green Cabbage (Brassica oleracea var. capitata)`}</li>
                     </ul>
                 </div>
                 <div className="view_all flex justify-center items-center text-[#057E0D]">
                    <Link to="/productDescription" className="hover:underline hover:underline-offset-4">VIEW ALL</Link>
                 </div>

                 <div className="disclaimer m-4">
                    <p className='text-xl py-4 font-bold text-gray-500'>Disclaimer</p>
                    <p>The image provided here is only for reference purpose Actual product packaging  and materials may contain more and different information than what is shown on our app or website.We recommend that you do not rely solely on the information presented here and that you always read labels,warnings, and directions before using or consuming a product </p>
                 </div>
              </div>

              <div className="store_info flex justify-between items-center p-4 max-w-screen-md h-20 bg-[#D9D9D9]">
                <div className="left flex space-x-6 items-center">
                    <div className="store_logo border w-fit rounded-lg">
                        <img className='w-10 rounded-lg' src={storelogo} alt="logo" />
                    </div>
                    <div className="store_name text-2xl">AGROMART</div>
                </div>
                <div className="right">
                  <div className="visit_btn">
                    <button className='px-6 py-3 text-white bg-[#057E0D] rounded-lg hover:underline-offset-2 '><Link to='/shop'>Visit Store</Link></button>
                  </div>   
                </div>
              </div>

              <div className="buy_add_option flex justify-between   sticky bottom-0 left-0 bg-[#ffffff] max-w-screen-md items-center md:hidden">
                <div className="store flex justify-center items-center pl-4">
                   <img className='w-4 cursor-pointer' src={store} alt="" />
                </div>
                <div className='flex space-x-4 p-4 '>
                  <div className="buy_btn px-4 py-3 bg-[#057E0D] text-white rounded-lg cursor-pointer">
                     <button className=''>Buy Now</button>
                  </div>
                  <div className="add_to_cart mr-2">
                     <button className='px-4 py-3  bg-[#057E0D] text-white rounded-lg cursor-pointer'>Add to Cart</button>
                  </div>
                </div>
              </div>

            </div>    
       </div>
    </>
  )
}

export default Product