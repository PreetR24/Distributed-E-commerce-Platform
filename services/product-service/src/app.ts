import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import v1Routes from './v1';

import { globalErrorHandler }
from '@shared/common';

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1', v1Routes);

app.use(globalErrorHandler);

export default app;