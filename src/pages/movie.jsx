import MovieDetails from "@/sections/MovieDetails";
import MovieBanner from "@/sections/MovieBanner";

export const metadata = {
    title: 'Movie - Kantara',
}

export default () => {
    return (
        <>
            <MovieBanner />
            <MovieDetails />
        </>
    )
}
