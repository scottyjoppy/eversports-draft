import { PortableTextComponents } from "@portabletext/react";

const myPortableTextComponents: PortableTextComponents = {
    marks: {
        link: ({value, children}) => {
            const target = (value?.href || "#").startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} rel={target === "_blank" ? "noindex nofollow" : undefined} className="text-blue-600">
                    {children}
                </a>
            )
        }
    }
}

export default myPortableTextComponents