export function authorizeModification(req, res, next) {
  const role = req.user.role;
  const loggedInUserId = String(req.user.id);
  const requestedUserId = String(req.params.userId);

  if (role === "parent") {
    return next();
  }

  if (role === "child" && loggedInUserId === requestedUserId) {
    return next();
  }

  return res.status(403).json({ error: "Access denied" });
}
