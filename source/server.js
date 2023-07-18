import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// Routes
import * as routes from "./routes/index.mjs"

// Utils
import { logger, errorLogger, notFoundLogger, validationLogger, swaggerSpec, upload } from "./utils/index.mjs";
import { adminMiddleware, guestMiddleware, hostMiddleware, userMiddleware } from "./middlewares/index.mjs";

export const app = express();

const swaggerUiOptions = {
    swaggerOptions: {
        authAction: {
            bearerAuth: {
                name: "JWT",
                schema: {
                    type: "http",
                    in: "header",
                    name: "Authorization",
                },
                value: `Bearer`,
            },
        },
    },
    persistAuthorization: true,
};

app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(bodyParser.json({ limit: '1000kb' }))
app.use('/images', express.static('images'));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
app.get('/docs.json', (req, res) => {
    req.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
});

app.use('/auth', routes.common.auth)
app.use('/products', routes.common.products)
app.use('/categories', routes.common.categories)
app.use('/books', routes.common.books)
app.use('/bicycles', routes.common.bicycles)
app.use('/users', routes.common.users)
app.post('/upload', upload.array('images'), (req, res) => {
    const domain = 'http://localhost'
    const fullDomain = domain + ':' + process.env.NODE_PORT
    const urls = req.files.map(image => {
        return {
            url: fullDomain + '/' + image.path.replace("\\", "/")
        }
    })
    res.json({ data: urls })
})

app.use('/', userMiddleware, routes.common.identify)

app.use('/host', hostMiddleware)
app.use('/host/products', routes.host.products)
app.use('/host/orders', routes.host.orders)
app.use('/host/chats', routes.host.chats)

app.use('/guest', guestMiddleware)
app.use('/guest/orders', routes.guest.orders)
app.use('/guest/favourites', routes.guest.favourites)
app.use('/guest/messages/send', routes.guest.messages)
app.use('/guest/chats', routes.guest.chats)

app.use('/admin', adminMiddleware)
app.use('/admin/books', routes.admin.books)
app.use('/admin/products', routes.admin.products)
app.use('/admin/users', routes.admin.users)
app.use('/admin/categories', routes.admin.categories)
app.use('/admin/currencies', routes.admin.currencies)
app.use('/admin/bicycles', routes.admin.bicycles)
app.use('/admin/roles', routes.admin.roles)
app.use('/admin/orders', routes.admin.orders)

//errors
app.get('/error', (req, res) => {
    /*const promise = Promise.reject(new Error('Promise reject'))
    promise.name = '/users';
    promise.statusCode = 418;*/
    throw new Error('Unhandled error!')

    res.sendStatus(200);
})

if (process.env.NODE_ENV !== 'test') {
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorName = `${name}: ${message}`;

        switch (name) {
            case 'NotFountError':
                notFoundLogger.error(errorName);
                break;

            case 'ValidationError':
                validationLogger.error(errorName);
                break;

            default:
                logger.error(errorName);
                break;
        }

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message })
    })
}

//For async
process.on('unhandledRejection', async (error, promise) => {
    try {
        await promise
        promise.handled = true;
    } catch ({ message }) {
        console.log(message)
    }
})

//For sync
process.on("uncaughtException", (err) => {
    console.log(err.message)
})

//For reasync
process.on('rejectionHandled', promise => {
    console.log(`Is promise ${promise.name} with code ${promise.statusCode}`)
})