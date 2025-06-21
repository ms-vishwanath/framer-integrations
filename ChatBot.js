import * as React from "react"
import { useState, useEffect } from "react"

const CHATBASE_ID = "C1AFfBYkSgioUubMhqTq3"
const CHATBASE_DOMAIN = "www.chatbase.co"

export function ChatBubbleEmbed() {
    const [loaded, setLoaded] = useState(false)

    const loadChatScript = () => {
        if (loaded || document.getElementById(CHATBASE_ID)) return

        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
            window.chatbase = (...args) => {
                if (!window.chatbase.q) window.chatbase.q = []
                window.chatbase.q.push(args)
            }

            window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                    if (prop === "q") return target.q
                    return (...args) => target(prop, ...args)
                },
            })
        }

        const script = document.createElement("script")
        script.src = `https://${CHATBASE_DOMAIN}/embed.min.js`
        script.id = CHATBASE_ID
        script.dataset.domain = CHATBASE_DOMAIN
        document.body.appendChild(script)
        setLoaded(true)
    }

    useEffect(() => {
        loadChatScript()
    }, [])

    return (
        <button
            onClick={loadChatScript}
            style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                display: "none",
                cursor: "pointer",
                zIndex: 9999,
            }}
        ></button>
    )
}
