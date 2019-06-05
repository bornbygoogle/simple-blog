import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const author = await req.context.models.Authors.findById(
    req.context.me.id,
  );
  return res.send(author);
});

export default router;
