import Breadcrumb from "@/components/common/Breadcrumb";
import GallerySection from "@/sections/GallerySection";
import { site } from "@/data";

export default function GalleryPage() {
    return (
        <main>
            <Breadcrumb pageKey="gallery" />
            <GallerySection data={site.gallery} />
        </main>
    );
}
