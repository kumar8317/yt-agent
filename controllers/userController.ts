      // Import services
      import userService from '../services/userService';

      // Implement controller functions
      const registerUser = async (req, res) => {
        try {
          const user = await userService.register(req.body);
          res.status(201).send(user);
        } catch (error) {
          res.status(500).send(error);
        }
      }

      const loginUser = async (req, res) => {
        try {
          const user = await userService.login(req.body);
          if (user) {
            res.status(200).send(user);
          } else {
            res.status(401).send('Unauthorized');
          }
        } catch (error) {
          res.status(500).send(error);
        }
      }

      const logoutUser = async (req, res) => {
        try {
          const result = await userService.logout(req.body);
          res.status(200).send(result);
        } catch (error) {
          res.status(500).send(error);
        }
      }

      const oauthUser = async (req, res) => {
        try {
          const user = await userService.oauth(req.body);
          if (user) {
            res.status(200).send(user);
          } else {
            res.status(401).send('Unauthorized');
          }
        } catch (error) {
          res.status(500).send(error);
        }
      }