import "./ShowBanner.scss"
import MoviesBannerCard from "@/components/MoviesBannerCard";

const ShowBanner = () => {
    const titleId = 'show-banner-title'

    return (
        <section
            className="container"
            aria-labelledby={titleId}
        >
            <MoviesBannerCard
                title='Stranger Things'
                titleId={titleId}
                description='When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'
                imgSrc="/src/assets/images/movie-banner/2.jpg"
                TitleTag="h1"
                isSmallPaddingY
            />
        </section>
    )
}

export default ShowBanner