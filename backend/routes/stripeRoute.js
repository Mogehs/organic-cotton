import express from "express";
import { createCheckoutSession } from "../stripe/stripeSession.js";

const router = express.Router();

router.post("/create-checkout-session/:id", createCheckoutSession);

export default router;
