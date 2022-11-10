import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - HotFoodies`;
    }, [title])
}

export default UseTitle; 