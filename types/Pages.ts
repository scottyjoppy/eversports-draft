import { PortableTextBlock } from "sanity";

export type Page = {
    url: URL;
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[]
}