import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import service from './service';

const router = express.Router();
dotenv.config();

require('../../utils/auth/basic');

router.post('/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, user) => {
    try {
      if (error || !user) {
        return next(req, res, 401, 'Unauthorized');
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          return next(req, res, error.message, error);
        }

        const { _id: id, email } = user;

        const payload = {
          sub: id,
          email,
        };

        const token = jwt.sign(payload, process.env.AUTH_JWT, {
          expiresIn: '60m',
        });

        return res.status(200).json({ token, user: { id, email } });
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

router.post('/sign-up', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const createdUser = await service.createUser(req.body);
    res.status(201).json({ message: 'User created correctly' });
  } catch (error) {
    return next(error);
  }
});

export default router;
