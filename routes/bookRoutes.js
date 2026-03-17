const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator'); 
const bookController = require('../controllers/bookController');

const validateBook = [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('isbn').notEmpty().withMessage('ISBN is required'),
    body('publishedDate').isISO8601().withMessage('Valid date is required (YYYY-MM-DD)')
];

// POST route mein validation add karein
router.post('/', validateBook, bookController.createBook);

// PUT route mein bhi validation add kar sakte hain
router.put('/:id', validateBook, bookController.updateBook);

// Baqi routes same rahenge
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.delete('/:id', bookController.deleteBook);

module.exports = router;