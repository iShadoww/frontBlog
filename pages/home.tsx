import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Post } from '../utils/types/post.type';
import { postService } from '../utils/post.service';

const notify = () => {
    toast("Thanks for your Like :D");
};
const notify2 = () => {
    toast("We hoped that this blog was to your liking :(");
};
const notify3 = () => {
    toast("Blog eliminate correctly");
};


const PageHome = () => {
    const [lista, setLista] = useState<Post[]>([]);

    const getBlogs = async () => {
       // await postService.guardarUno({
       //      active: true,
       //      decription: 'Hola Mundo',
       //      title: 'Titulo Uno',
       //      like: 0,
       //      dislike: 0,
       //      createOn: new Date()
       //  })

        const posts = await postService.obtenerTodo();

        console.table(posts)


        setLista(posts)
    }

    useEffect(() => {
        getBlogs();
    }, [])

    return (
        <main className="flex min-h-screen flex-col justify-center bg-blue-100 p-16">
            <section className="text-gray-600 body-font">
                <h1 className={styles.title}> Welcome to the blog site.</h1>
                <Link href={"/login"}>
                    <button
                        className="bg-gradient-to-r from-yellow-400 to-yellow-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Volver
                        al Login
                    </button>
                </Link>
                <p className={styles.description}>
                    This blog is to share information to the citizens so that they can see and learn about the best
                    things happening in their municipality.
                </p>
                <Link href={"/create"}>
                    <button
                        className="inline-block rounded-md bg-blue-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-blue-400">Create
                    </button>
                </Link>

                <div className="container px-5 py-24 mx-auto">
                    <main className="flex min-h-screen flex-col justify-center bg-gray-400 p-16">

                        <div className="flex flex-wrap -m-4">
                            {lista?.map((value, index) => (
                                <div className="p-4 md:w-1/3" key={index}>
                                    <div
                                        className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                            src="https://laverdadnoticias.com/__export/1585256906711/sites/laverdad/img/2020/03/26/quinta_avenida_vacixa3_2.jpg_237065588.jpg"
                                            alt="blog"></img>
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog
                                                -1</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                                                {value.title}
                                            </h1>
                                            <p className="leading-relaxed mb-3">
                                                {value.decription}
                                            </p>
                                            <div className="flex items-center flex-wrap ">
                                                <button
                                                    className='bg-gradient-to-r from-blue-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg'
                                                    onClick={notify}>👍 Like!
                                                </button>
                                                <ToastContainer/>
                                                <button
                                                    className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                                                    onClick={notify2}>👎 Dislike!
                                                </button>
                                                <ToastContainer/>
                                                <Link href={"/create"}>
                                                    <button
                                                        className="bg-gradient-to-r from-cyan-400 to-blue-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Edit
                                                    </button>
                                                </Link>
                                                <Link href={"/create"}>
                                                    <button
                                                        className="bg-gradient-to-r from-green-200 to-green-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Update
                                                    </button>
                                                </Link>
                                                <button
                                                    className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                                                    onClick={notify3}>Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </section>
        </main>

    )
}

export default PageHome;
