import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import bcrypt from 'bcryptjs';

import service from '../../components/auth/service';

passport.use(
  new BasicStrategy(async (email, password, cb) => {
    const user = await service.getUser(email);
    if (!user) {
      cb('Unauthorized');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      cb('Unauthorized');
    }

    delete user.password;

    return cb(null, user);
  })
);
