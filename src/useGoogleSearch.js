import {useState, useEffect} from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY = "15210109f168f1e72"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        
    }, [term])
}

export default useGoogleSearch