      import express from 'express';
      const router: express.Router = express.Router();

      // Import controllers
      import userController from '../controllers/userController';
      import videoController from '../controllers/videoController';

      // Define routes
      router.post('/register', userController.register);
      router.post('/login', userController.login);
      router.post('/logout', userController.logout);
      router.post('/oauth', userController.oauth);
      router.post('/upload', videoController.upload);
      router.get('/review', videoController.review);
      router.put('/approval', videoController.approval);

      export default router;