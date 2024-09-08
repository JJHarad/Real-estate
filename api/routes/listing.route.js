import express from 'express';
import { createListing, deleteListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
//import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete( '/delete/:id', verifyToken,  deleteListing );
//delete wala route

export default router;