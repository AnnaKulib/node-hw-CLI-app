const router = require("./routes/router");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.join());

app.use(router);

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}...`));