import ShowBanner from "@/sections/ShowBanner";
import MovieDetails from "@/sections/MovieDetails/index.js";
import Seasons from "@/components/Seasons/index.js";

export const metadata = {
    title: 'Show - Stranger Things',
}

export default () => {
    return (
        <>
            <ShowBanner />
            <MovieDetails
                seasons={<Seasons />}
            />
        </>
    )
}
