import React from "react";

export default function Loading() {
    return (
        <div>
            <div class="spinner-border" role="status" style={{height:'100px', width:'100px'}}>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}