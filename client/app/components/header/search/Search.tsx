"use client"

import { TestAxiosReq } from "@/api/test"

const Search = () => {
    return (
        <div>
            <button
                onClick={() => {
                    TestAxiosReq("123")
                }}
            >
                Fetch
            </button>
        </div>
    )
}

export default Search
