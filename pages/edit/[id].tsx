import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { postService } from '../../utils/post.service';
import { Post } from '../../utils/types/post.type';

const Edit = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [activo, setActivo] = useState("");

    const [blog, setBlog] = useState<Post>()

    const router = useRouter();

    const { id } = router.query;

    const getBlog = async (id: number) => {

        const blog = await postService.obtenerUno(id)

        setBlog(blog)
    }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        router.push('/home')

    }


    useEffect(() => {

        (async () => {
            if (id) {
                await getBlog(parseInt(`${id}`))
            }
        })();

    }, [id]);

    useEffect(() => {
        if (blog) {
            setTitulo(blog?.title);
            setDescripcion(blog?.decription);
        }
    }, [blog]);

    return (
        <div>
            <Link href={"/home"}>
                <button
                    className="bg-gradient-to-r from-green-400 to-green-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Volver
                    al Home
                </button>
            </Link>
            <main className="flex min-h-screen flex-col justify-center bg-cyan-500 p-16">
                <form onSubmit={submit}>
                    <h1 className="text-3xl font-bold text-white">Update a blog</h1>
                    <p className="mb-8 font-semibold text-gray-100"></p>
                    <div className="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="text" className="mb-2 font-semibold">Titulo</label>
                                <input type="text" id="text" value={titulo} onChange={e => setTitulo(e.target.value)}
                                    className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="text" className="mb-2 font-semibold">Descripcion</label>
                                <input type="text" id="text" value={descripcion} onChange={e => setDescripcion(e.target.value)}
                                    className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="text" className="mb-2 font-semibold">Activo o Inactivo</label>
                            <input type="text" id="text" onChange={e => setActivo(e.target.value)}
                                className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                        </div>
                        <div className="flex">

                            <label htmlFor="privacy" className="mb-2 ">
                                <input type="checkbox" name="privcay" id="privacy" className="mr-2 peer w-0 h-0" />
                                <h1 className="font-semibold">I have read and agreed the privacy policy</h1>
                                <div
                                    className="w-6 h-6  items-center inline-block justify-center hover:border-blue-500 focus:ring transition-all focus:ring-blue-500/40 border border-slate-200 rounded-lg peer-checked:bg-blue-500 peer-checked:[&>svg]:block [&>svg]:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-white "
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </label>
                            <button
                                type="submit" className="bg-gradient-to-r from-gray-400 to-gray-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Next
                            </button>
                            <div className="flex items-center">
                            </div>
                        </div>
                    </div>
                </form>
            </main>

        </div>
    )
}

export default Edit;