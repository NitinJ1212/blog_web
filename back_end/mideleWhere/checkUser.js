const userLogin = require("../models/loginRegister")

const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  console.log(authorizationHeader,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  if (!authorizationHeader) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const token = authorizationHeader.split(' ')[1];
  console.log(token, "qqqqqqqqqqqqqqqqqqqqqqhgfroijgoifjhglkdsfjghkslfgnjkfljhsgjsgnffjlkhg");

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, 'nitinjangid', (err, decoded) => {
    console.log(decoded, "wwwwwwwwwwwwwwwwwwww", err);
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }
    // Attach the decoded user object to the request object for use in subsequent middleware/functions
    req.user = decoded;
    next(); // Call the next middleware function
  });
}

module.exports = verifyToken;
