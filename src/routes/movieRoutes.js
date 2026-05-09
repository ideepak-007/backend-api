import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ httpMethod: 'get' });
});

router.post('/', (req, res) => {
  return res.json({ httpMethod: 'post' });
});

router.put('/', (req, res) => {
  return res.json({ httpMethod: 'put' });
});

router.delete('/', (req, res) => {
  return res.json({ httpMethod: 'delete' });
});

export default router;
