import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function SeacrhInput (){

    const [term, setTerm]=useState('')
    const navigate = useNavigate();

    const handleSubmit =(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        navigate( `/search?term=${term}`);
        setTerm('');
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="relative">
            <div className="absolute inset-y-0 items-center pl-3">
            
            </div>
            
            <input 
            className="p-10 py-2 w-full border-blue-300 shadow-none focus:border-blue-400"
            placeholder="search packges"
            value={term}
            onChange={e=> setTerm(e.target.value) }
            />
            </div>
        </form>
    </div>
}