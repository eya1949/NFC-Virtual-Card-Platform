// import JWT from "jsonwebtoken";

// protected routes token base

// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     next();
//   } catch (error) {
//     console.log(error);
//     res.send({error})
//   }
// };

import JWT from 'jsonwebtoken';

export const requireSignIn = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided, or token was invalid' });
    }

    const token = authorizationHeader.split(' ')[1];
    const decoded = JWT.verify(token, process.env.JWT_SECRET); // Verify the extracted token
    req.user = decoded; // Optional: Attach the decoded data to the request object
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Failed to authenticate token' });
  }
};

