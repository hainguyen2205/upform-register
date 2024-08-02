import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viewConfig = (app) => {
    app.engine('.hbs', engine({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, '../resources/views'));
};

export default viewConfig;
