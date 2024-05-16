import { useContext } from "react"
import { PostContext } from "../context/PostContext"

function usePost(){
    const context=useContext(PostContext)
    if(context===undefined) throw new Error("PostContext was used outside of the PostProvider")
    return context
}
export{usePost}