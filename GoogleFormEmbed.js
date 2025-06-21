import * as React from "react"

export function GoogleFormEmbed() {
    return (
        <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf3FeivIGJ8OL41FcF4L2ThruD2Ydhyl47AJyQKmWTEE6YxYQ/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ border: "none" }}
                title="Google Form"
            >
                Loading…
            </iframe>
        </div>
    )
}
