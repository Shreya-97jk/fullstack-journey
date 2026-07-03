import { validateBody, createBookSchema, updateBookSchema } from '../middleware/bookValidation';
import { Router } from 'express';
import * as bookController from '../controllers/bookController';

const router = Router();

router.post('/', validateBody(createBookSchema), bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.patch('/:id', validateBody(updateBookSchema),bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;