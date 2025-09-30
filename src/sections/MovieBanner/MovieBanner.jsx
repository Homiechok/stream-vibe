import "./MovieBanner.scss"
import MoviesBannerCard from "@/components/MoviesBannerCard";

const MovieBanner = () => {
    const titleId = 'movie-banner-title'

    return (
        <section
            className="container"
            aria-labelledby={titleId}
        >
            <MoviesBannerCard
                title='Kantara'
                titleId={titleId}
                description='A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'
                imgSrc="/src/assets/images/movie-banner/1.jpg"
                TitleTag="h1"
                isSmallPaddingY
            />
        </section>
    )
}

export default MovieBanner