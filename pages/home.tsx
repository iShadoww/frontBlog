import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>{
  toast("Thanks for your Like :D");
}; 
const notify2 = () =>{
  toast("We hoped that this blog was to your liking :(");
}; 
const notify3 = () =>{
  toast("Blog eliminate correctly");
};


const PageHome = () =>{
    return(
<main className="flex min-h-screen flex-col justify-center bg-blue-100 p-16">
<section className="text-gray-600 body-font">
<h1 className={styles.title}> Welcome to the blog site.</h1>
<Link href={"/login"}><button className="bg-gradient-to-r from-yellow-400 to-yellow-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Volver al Login</button></Link>
<p className={styles.description}>
    This blog is to share information to the citizens so that they can see and learn about the best things happening in their municipality.
        </p>
        <Link href={"/create"}><button className="inline-block rounded-md bg-blue-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-blue-400">Create</button></Link>

        <div className="container px-5 py-24 mx-auto">
        <main className="flex min-h-screen flex-col justify-center bg-gray-400 p-16">

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://laverdadnoticias.com/__export/1585256906711/sites/laverdad/img/2020/03/26/quinta_avenida_vacixa3_2.jpg_237065588.jpg" alt="blog"></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog -1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">The fifth avenue</h1>
                  <p className="leading-relaxed mb-3">5th Avenue is the heart of this city and only one block from the beach. It has 100's of restaurants, shopping outlets, and a nightlife you can hardly imagine.</p>
                  <div className="flex items-center flex-wrap ">
                    <button className='bg-gradient-to-r from-blue-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg' onClick={notify}>👍 Like!</button> 
                    <ToastContainer />
                    <button className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify2}>👎 Dislike!</button> 
                    <ToastContainer />
                    <Link href={"/create"}><button className="bg-gradient-to-r from-cyan-400 to-blue-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Edit</button></Link>
                    <Link href={"/create"}><button className="bg-gradient-to-r from-green-200 to-green-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Update</button></Link>
                    <button className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify3}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                < img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://thumbs.dreamstime.com/b/playa-del-carmen-mexico-january-entrance-to-municipal-palace-playa-del-carmen-riviera-maya-mexico-beautiful-blue-sky-playa-110022557.jpg" alt="blog"></img>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog -2</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Municipality</h1>
                    <p className="leading-relaxed mb-3">It is located at Av. 20 Entre Calle 8 y 10 Manzana 101 Centro, 77010 Playa del Carmen, Quintana Roo - ~6.4 km</p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-blue-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify}>👍 Like!</button> 
                      <ToastContainer />
                      <button className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify2}>👎 Dislike!</button>
                      <ToastContainer /> 
                      <Link href={"/create"}><button className="bg-gradient-to-r from-cyan-400 to-blue-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Edit</button></Link>
                      <Link href={"/create"}><button className="bg-gradient-to-r from-green-200 to-green-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Update</button></Link>
                      <button className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify3}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"></img>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog -3</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-blue-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify}>👍 Like!</button> 
                      <ToastContainer />
                      <button className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify2}>👎 Dislike!</button>
                      <ToastContainer /> 
                      <Link href={"/create"}><button className="bg-gradient-to-r from-cyan-400 to-blue-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Edit</button></Link>
                      <Link href={"/create"}><button className="bg-gradient-to-r from-green-200 to-green-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Update</button></Link>
                      <button className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"onClick={notify3}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      </main>

    )
}
export default PageHome;