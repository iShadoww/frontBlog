import axios from 'axios'
import { Post } from './types/post.type';

const uri: string = 'http://localhost:3000'

export class PostService {

    public obtenerTodo(): Promise<Post[]> {
        return axios.get(uri + '/blogs').then((resp) => resp.data).catch((e) => {
            console.warn(e)
        })
    }

    public obtenerUno(id: number) {
        return axios.get(uri + '/blogs' + `${id}`).then((resp) => resp.data).catch((e) => {
            console.warn(e)
        })
    }

    public guardarUno(data: Post) {
        return axios.post(uri + '/blogs', data).then((resp) => resp.data).catch((e) => {
            console.warn(e)
        })
    }

    public actualizarUno(data: Post) {
        return axios.put(uri + '/blogs' + `${data.id}`, data).then((resp) => resp.data).catch((e) => {
            console.warn(e)
        })
    }

    public eliminarUno(id: number) {
        return axios.delete(uri + '/blogs' + `${id}`).then((resp) => resp.data).catch((e) => {
            console.warn(e)
        })
    }

}

export const postService = new PostService();
