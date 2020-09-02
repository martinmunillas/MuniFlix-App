import movies from './movies'
import series from './series'

const apiRoutes = (app) => {
    app.use('/movies', movies)
    app.use('/series', series)
}

export default apiRoutes