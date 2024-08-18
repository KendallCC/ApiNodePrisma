import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ message: 'Acceso denegado' });
    }
  
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET || 'secret');
      req.user = decoded; // Añadimos la información del usuario a la solicitud
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }
  }