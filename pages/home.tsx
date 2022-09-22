import React, { useEffect, useId, useState, SyntheticEvent } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Post } from '../utils/types/post.type';
import { postService } from '../utils/post.service';
import router, { useRouter } from 'next/router';


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
                                                    {value.like}
                                                </button>
                                                <ToastContainer/>
                                                <button
                                                    className="bg-gradient-to-r from-red-400 to-red-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                                                    onClick={notify2}>👎 Dislike!
                                                    {value.dislike}
                                                </button>
                                                <ToastContainer/>
                                                <Link href={"/edit/"+value.id}>
                                                    <button
                                                        className="bg-gradient-to-r from-cyan-400 to-blue-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Edit
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
